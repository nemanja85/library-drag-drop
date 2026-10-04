import type { DragEvent, ReactNode } from "react";
import { useCallback } from "react";
import { useDragContext } from "./DragContext";

type Props = { id: string; children: ReactNode; as?: "li" | "div" };

export function DragItem({ id, children, as: Tag = "li" }: Props) {
  const { onDragStart, onDragEnd } = useDragContext();

  const handleDragStart = useCallback((e: DragEvent<HTMLElement>) => {
    e.dataTransfer.setData("text/plain", id);
    e.dataTransfer.effectAllowed = "move";
    onDragStart(id);
  }, [id, onDragStart]);

  const handleDragEnd = useCallback(() => {
    onDragEnd(id);
  }, [id, onDragEnd]);

  return (
      <Tag
          draggable
          data-drag-id={id}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
      >
        {children}
      </Tag>
  );
}