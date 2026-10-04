import type { DragEvent, ReactNode } from "react";

export type DragContextValue = {
    onDragStart: (id: string) => void;
    onDragEnd: (id: string) => void;
    onDrop: (id: string) => void;
    onDragOver: (e: DragEvent<HTMLElement>) => void;
};

export type DragItemProps = {
    id: string;
    children: ReactNode;
    as?: "li" | "div";
};

export type DragAreaProps<T> = {
    items: T[];
    onChange: (items: T[]) => void;
    children: ReactNode;
    as?: "ul" | "div";
};