import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import { AppLayout } from "./components/Layout/AppLayout";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";

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
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
