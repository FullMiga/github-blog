import { Outlet } from "react-router";
import { Header } from "../components/Header";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}