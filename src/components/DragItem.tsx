// DragItem.tsx
import { ReactNode, DragEvent, FC } from "react";
import { DragContext } from "./DragContext";

type DragItemProps = {
    children: ReactNode;
    id: string;
}

export const DragItem: FC<DragItemProps> = ({ children, id }) => {
    const { setDraggingId } = DragContext();

    const handleDragStart = (e: DragEvent<HTMLLIElement>) => {
        setDraggingId(id);
        e.dataTransfer.setData("text/plain", id);
    };

    const handleDragEnd = () => {
        setDraggingId(null);
    };

    return (
        <li
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            {children}
        </li>
    );
};
