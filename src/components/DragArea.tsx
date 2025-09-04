import { DragEvent, ReactNode, useContext } from 'react';
import { DragContext } from './DragContext';

export type DragAreaProps<T> = {
  items: T[];
  onChange: (updatedItems: T[]) => void;
  children: ReactNode;
};

export const DragArea = <T extends { id: string }>({ items, onChange, children }: DragAreaProps<T>) => {
  const useDragContext = () => {
    const context = useContext(DragContext);
    if (!context) {
      throw new Error('Components DragArea can only use context if they are within a ContextProvider');
    }
    return context;
  };

  const { onDragOver } = useDragContext();

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const draggedItemId = e.dataTransfer.getData('text/plain');

    const draggedIndex = items.findIndex((item) => item.id === draggedItemId);
    const droppedIndex = parseInt(e.currentTarget.dataset.index ?? '');

    if (draggedIndex === droppedIndex) {
      return;
    }

    const updatedItems = [...items];
    const [draggedUser] = updatedItems.splice(draggedIndex, 1);
    updatedItems.splice(droppedIndex, 0, draggedUser);
    onChange(updatedItems);
  };

  return (
    <div onDrop={handleDrop} onDragOver={onDragOver}>
      {children}
    </div>
  );
};
