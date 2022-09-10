import React from "react";
import { Outlet } from "react-router-dom";
import {Navbar} from './header/navbar/index'

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
