import { useState } from 'react';
import { DragArea, DragItem } from './index';
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
    <>
      <ul>
          <DragArea items={exampleUsers} onChange={setExampleUsers}>
            {exampleUsers.map((user, i) => (
              <DragItem key={user.email} id={user.email}>
                <UserItem name={user.firstName} email={user.email} />
              </DragItem>
            ))}
          </DragArea>
      </ul>
    </>
  );
};
