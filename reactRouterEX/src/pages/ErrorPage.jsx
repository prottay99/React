import { NavLink, useNavigate, useRouteError } from "react-router";

export const ErrorPage = () => {
  const error = useRouteError();

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <h1>
        {error.statusText}-{error.status}
      </h1>
      <p>{error.error.message}</p>
      <NavLink to="/">Back to Home</NavLink>
      <button onClick={handleGoBack}>Go Back</button>
    </>
  );
};
