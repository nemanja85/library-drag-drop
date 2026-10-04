import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { DragEvent, ReactNode } from "react";

type DragContextValue = {
  onDragStart: (id: string) => void;
  onDragEnd: (id: string) => void;
  onDrop: (id: string) => void;
  onDragOver: (e: DragEvent<HTMLElement>) => void;
};

const DragContext = createContext<DragContextValue | null>(null);

export function useDragContext() {
  const ctx = useContext(DragContext);
  if (!ctx) throw new Error("useDragContext must be used within <DragContextProvider>");
  return ctx;
}

type ProviderProps = {
  children: ReactNode;
  onDragStart?: (id: string) => void;
  onDragEnd?: (id: string) => void;
  onDrop?: (id: string) => void;
};

export function DragContextProvider({ children, onDragStart, onDragEnd, onDrop }: ProviderProps) {
  const [draggingId, setDraggingId] = useState<string | null>(null);

  const handleDragStart = useCallback((id: string) => {
    setDraggingId(id);
    onDragStart?.(id);
  }, [onDragStart]);

  const handleDragEnd = useCallback((id: string) => {
    setDraggingId(null);
    onDragEnd?.(id);
  }, [onDragEnd]);

  const handleDrop = useCallback((id: string) => {
    onDrop?.(id);
  }, [onDrop]);

  const handleDragOver = useCallback((e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }, []);

  const value = useMemo<DragContextValue>(
      () => ({ onDragStart: handleDragStart, onDragEnd: handleDragEnd, onDrop: handleDrop, onDragOver: handleDragOver }),
      [handleDragStart, handleDragEnd, handleDrop, handleDragOver],
  );

  return (
      <DragContext.Provider value={value}>
        <div data-dragging-id={draggingId ?? undefined}>{children}</div>
      </DragContext.Provider>
  );
}