import type { DragEvent, ReactNode } from "react";
import { useCallback } from "react";
import { useDragContext } from "./DragContext";

type Props<T> = { items: T[]; onChange: (items: T[]) => void; children: ReactNode; as?: "ul" | "div" };

export function DragArea<T extends { id: string }>({ items, onChange, children, as: Tag = "ul" }: Props<T>) {
  const { onDragOver, onDrop } = useDragContext();

  const handleDrop = useCallback((e: DragEvent<HTMLElement>) => {
    e.preventDefault();

    const draggedId = e.dataTransfer.getData("text/plain");
    if (!draggedId) return;

    const targetEl = (e.target as HTMLElement).closest<HTMLElement>("[data-drag-id]");
    const droppedId = targetEl?.dataset.dragId;

    const fromIndex = items.findIndex((it) => it.id === draggedId);
    const toIndex = droppedId ? items.findIndex((it) => it.id === droppedId) : items.length - 1;

    if (fromIndex === -1 || fromIndex === toIndex) return;

    const next = [...items];
    const [moved] = next.splice(fromIndex, 1);
    next.splice(toIndex, 0, moved);

    onChange(next);
    onDrop(draggedId);
  }, [items, onChange, onDrop]);

  return (
      <Tag onDrop={handleDrop} onDragOver={onDragOver}>
        {children}
      </Tag>
  );
}