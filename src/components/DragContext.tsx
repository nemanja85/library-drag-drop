import {createContext, useContext, useState, Dispatch, SetStateAction, FC, ReactNode} from "react";

type DragContextProps = {
    draggingId: string | null;
    setDraggingId: Dispatch<SetStateAction<string | null>>;
}

type DragContextProviderProps = {
    children: ReactNode;
}

 const dragContext = createContext<DragContextProps | undefined>(undefined);

export const DragContext = () => {
    const context = useContext(dragContext);
    return context ? context : (() => { throw new Error("Greška: Context mora biti korišćen u okviru Provajdera!"); })();
};

export const DragContextProvider: FC<DragContextProviderProps> = ({ children }) => {
    const [draggingId, setDraggingId] = useState<string | null>(null);

    return (
        <dragContext.Provider value={{ draggingId, setDraggingId }}>
            {children}
        </dragContext.Provider>
    );
};