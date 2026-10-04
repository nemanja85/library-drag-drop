import { useState } from "react";
import { DragArea, DragContextProvider, DragItem } from "../../components";
import users from "../../users.json";

function UserRow({ name, email }: { name: string; email: string }) {
    return (
        <div className="flex justify-between gap-4 px-3 py-2 border-b">
            <span className="font-medium">{name}</span>
            <span className="text-gray-500">{email}</span>
        </div>
    );
}

export function DraggableUserList() {
    const [items, setItems] = useState(() =>
        users.map((u) => ({ id: u.email, ...u })),
    );

    return (
        <DragContextProvider
            onDragStart={(id) => console.log("Drag started:", id)}
            onDragEnd={(id) => console.log("Drag ended:", id)}
            onDrop={(id) => console.log("Dropped:", id)}
        >
            <DragArea
                items={items}
                onChange={setItems}
                renderItem={(user) => (
                    <DragItem key={user.id} id={user.id}>
                        <UserRow name={user.firstName} email={user.email} />
                    </DragItem>
                )}
            />
        </DragContextProvider>
    );
}