import { createBrowserRouter, RouterProvider, Routes } from "react-router";
import "./App.css";
import { AppLayout } from "./components/Layout/AppLayout";
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";
import { Favorites } from "./pages/Favorites";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/recipe-item/:id",
          element: <Details />,
        },
        {
          path: "/favorites",
          element: <Favorites />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
