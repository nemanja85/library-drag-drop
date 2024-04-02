import { DragEvent, FC, ReactNode, useContext } from 'react';
import { DragContext } from './DragContext';

type DragItemProps = {
  id: string;
  children: ReactNode;
};

export const DragItem: FC<DragItemProps> = ({ id, children }) => {
  const { onDragStart, onDragEnd } = useContext(DragContext);

  const handleDragStart = (e: DragEvent<HTMLLIElement>) => {
    e.dataTransfer.setData('text/plain', id);
    onDragStart(id);
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
