import { DragEvent, ReactNode, useContext } from 'react';
import { DragContext } from './DragContext';

export type DragAreaProps<T> = {
  items: T[];
  onChange: (items: T[]) => void;
  children: ReactNode;
};

export const DragArea = <T extends any>({ items, onChange, children }: DragAreaProps<T>) => {
  const { onDrop, onDragOver } = useContext(DragContext);


 const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    let updatedItems = [...items];
    const draggedItemId = e.dataTransfer.getData('text/plain');
    const newItems = items.filter((item) => item !== draggedItemId);
    onChange(newItems);

     const draggedIndex = updatedItems.findIndex((item) => item.id === draggedItemId);
     const droppedIndex = updatedItems.findIndex((item) => item.id === draggedItemId);

    const [draggedUser] = updatedItems.splice(draggedIndex, 1);
    updatedItems.splice(droppedIndex, 0, draggedUser);

  };

  return (
    <div onDrop={handleDrop} onDragOver={onDragOver}>
      {children}
    </div>
  );
};
