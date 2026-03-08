import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
