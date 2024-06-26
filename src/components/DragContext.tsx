import { DragEvent, FC, ReactNode, createContext, useState } from 'react';

type DragContextProps = {
  onDragStart: (id: string) => void;
  onDragEnd: (id: string) => void;
  onDrop: (id: string) => void;
  onDragOver: (e: DragEvent<HTMLDivElement>) => void;
};

type DragContextProviderProps = {
  children: ReactNode;
};

export const DragContext = createContext<DragContextProps>({
  onDragStart: () => {},
  onDragEnd: () => {},
  onDrop: () => {},
  onDragOver: () => {},
});

export const DragContextProvider: FC<DragContextProviderProps> = ({ children }) => {
  const [dragState, setDragState] = useState<DragContextProps>({
    onDragStart: () => {
      setDragState(dragState);
    },
    onDragEnd: () => {
      setDragState(dragState);
    },
    onDrop: () => {
      setDragState(dragState);
    },
    onDragOver: () => {
      setDragState(dragState);
    },
  });

  return <DragContext.Provider value={dragState}>{children}</DragContext.Provider>;
};
