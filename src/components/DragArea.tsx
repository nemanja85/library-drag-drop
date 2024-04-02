import { DragEvent, ReactNode, useContext } from 'react';
import { DragContext } from './DragContext';

type DragAreaProps<T> = {
  items: T[];
  onChange: (items: T[]) => void;
  children: ReactNode;
};

export const DragArea = <T extends any>({ items, onChange, children }: DragAreaProps<T>) => {
  const { onDrop, onDragOver } = useContext(DragContext);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const draggedItemId = e.dataTransfer.getData('text/plain');
    const newItems = items.filter((item) => item !== draggedItemId);
    onChange(newItems);
  };

  return (
    <div onDrop={handleDrop} onDragOver={onDragOver}>
      {children}
    </div>
  );
};
