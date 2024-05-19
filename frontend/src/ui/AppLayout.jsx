import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="flex h-screen w-full flex-col items-center">
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
