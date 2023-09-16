import { Outlet } from "react-router-dom";
import React from "react";
import Nav from "../components/Nav";

function LayoutPage() {
  return (
    <React.Fragment>
      <Nav />
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  );
}

export default LayoutPage;
