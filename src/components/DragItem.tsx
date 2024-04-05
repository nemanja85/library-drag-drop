import { DragEvent, FC, ReactNode, useContext, useRef } from 'react';
import { DragContext } from './DragContext';

type DragItemProps = {
  id: string;
  children: ReactNode;
};

export const DragItem: FC<DragItemProps> = ({ id, children }) => {
  const useDragContext = () => {
    const context = useContext(DragContext);
    if (!context) {
      throw new Error('Context must be used inside the ContextProvider');
    }
    return context;
  };

  const { onDragEnd, onDragStart } = useDragContext();

  const positions = useRef<{ x: number; y: number } | null>(null);

  const handleDragStart = (e: DragEvent<HTMLLIElement>) => {
    e.dataTransfer.setData('text/plain', id);
    onDragStart(id);

    positions.current = {
      x: e.clientX,
      y: e.clientY,
    };
  };

  const handleDragEnd = (e: DragEvent<HTMLLIElement>) => {
    e.dataTransfer.setData('text/plain', id);
    onDragEnd(id);

    positions.current = {
      x: e.clientX,
      y: e.clientY,
    };
  };

  return (
    <li draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      {children}
    </li>
  );
};
