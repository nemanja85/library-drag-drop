import { ReactNode, DragEvent, Dispatch, SetStateAction, FC } from "react";
import { DragContext } from "./DragContext";

type DragAreaProps = {
    children: ReactNode;
    items: [];
    onChange: Dispatch<SetStateAction<HTMLUListElement[]>>;
}


export const DragArea: FC<DragAreaProps> = ({ children, items, onChange }) => {
    const { setDraggingId } = DragContext();

    const handleDragOver = (e: DragEvent<HTMLUListElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: DragEvent<HTMLUListElement>) => {
        e.preventDefault();
        const draggedItemId = e.dataTransfer.getData("text/plain");
        if (draggedItemId) {
            const updatedItems = items.filter(item => item.id !== draggedItemId);
            const draggedItem = items.find(item => item.id === draggedItemId);
            if (draggedItem) {
                const dropIndex = Array.from(e.currentTarget.children).findIndex(
                    (element) => element.contains(e.target as Node)
                );
                updatedItems.splice(dropIndex, 0, draggedItem);
                onChange(updatedItems);
            }
        }
        setDraggingId(null);
    };

    return (
        <ul onDragOver={handleDragOver} onDrop={handleDrop}>
            {children}
        </ul>
    );
};
