import { useState } from "react";
import {
    DragContext,
    DragArea,
    DragItem,
} from "./index.ts";
import users from "./users.json";

type UserProps = {
    name: string;
    email: string;
};

const UserItem = ({ name, email }: UserProps) => {
    return (
        <li>
            <span>{name}</span>
            <span>{email}</span>
        </li>
    );
};

export const DraggableUserList = () => {
    // Example
    const [exampleUsers, setExampleUsers] = useState(users);

    return (
        <DragContext note="Ovo je opcionalan wrapper">
            <ul>
                <DragArea items={exampleUsers} onChange={setExampleUsers}>
                    {exampleUsers.map((user, i) => (
                        <DragItem key={user.id} id={user.id}>
                            <UserItem name={user.name} email={user.email} />
                        </DragItem>
                    ))}
                </DragArea>
            </ul>
        </DragContext>
    );
};

