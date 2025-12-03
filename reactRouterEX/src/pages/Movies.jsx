import { useLoaderData } from "react-router";

export const Movies = () => {
  const users = useLoaderData();

  return (
    <div>
      <h1>Movies page</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} - {user.username}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
