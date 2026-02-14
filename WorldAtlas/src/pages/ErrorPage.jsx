import { NavLink, useRouteError } from "react-router";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Oops! An Error Occurred</h1>
      <h2>{error.status}</h2>
      {error && <p>{error.data}</p>}
      <NavLink to="/">Go to Home</NavLink>
    </div>
  );
};
