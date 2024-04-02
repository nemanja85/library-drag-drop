import { DragEvent, FC, ReactNode, useContext, useRef } from 'react';
import { DragContext } from './DragContext';

type DragItemProps = {
  id: string;
  children: ReactNode;
};

export const DragItem: FC<DragItemProps> = ({ id, children }) => {
  const { onDragStart, onDragEnd, onDrop, onDragOver } = useContext(DragContext);
   const initialPositionRef = useRef<{ x: number; y: number } | null>(null);

  const handleDragStart = (e: DragEvent<HTMLLIElement>) => {
    e.dataTransfer.setData('text/plain', id);
    onDragStart(id);

    initialPositionRef.current = {
      x: e.clientX,
      y: e.clientY,
    };

    console.log('X position ', e.clientX);
    console.log('Y position ', e.clientY);
  };

  const handleDragEnd = () => {
    onDragEnd();
  };

  return (
    <li draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      {children}
    </li>
  );
};
