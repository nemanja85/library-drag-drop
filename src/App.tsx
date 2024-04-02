import React, { useState } from 'react';
import { DragArea, DragContext, DragItem } from './components';
import users from './users.json';

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
    <DragContext.Provider
      value={{
        onDragStart: (id: string) => console.log('Drag started for item: ', id),
        onDragEnd: () => console.log('Drag ended'),
        onDrop: (id: string) => console.log('Item dropped: ', id),
        onDragOver: (e: React.DragEvent<HTMLDivElement>) => e.preventDefault(),
      }}
    >
      <ul>
        <DragArea items={exampleUsers} onChange={setExampleUsers}>
          {exampleUsers.map((user, i) => (
            <DragItem key={user.email} id={user.email}>
              <UserItem name={user.firstName} email={user.email} />
            </DragItem>
          ))}
        </DragArea>
      </ul>
    </DragContext.Provider>
  );
};
