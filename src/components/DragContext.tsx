import { createContext, useState, DragEvent, ReactNode, FC } from 'react';

type DragContextProps = {
  onDragStart: (id: string) => void;
  onDragEnd: () => void;
  onDrop: (id: string) => void;
  onDragOver: (e: DragEvent<HTMLDivElement>) => void;
};

type DragContextProviderProps = {
    children: ReactNode;
}

export const DragContext = createContext<DragContextProps>({
  onDragStart: () => {},
  onDragEnd: () => {},
  onDrop: () => {},
  onDragOver: () => {},
});

export const DragContextProvider: FC<DragContextProviderProps> = ({ children }) => {
    const [isDraging, setDraging] = useState(false);
    const [dragState, setDragState] = useState<DragContextProps>({
        onDragStart: (id: string) => {

        },
        onDragEnd: () => {},
        onDrop: (id: string) => {},
        onDragOver: (e: DragEvent<HTMLDivElement>) => {},
  });

  return <DragContext.Provider value={dragState}>{children}</DragContext.Provider>;
};
