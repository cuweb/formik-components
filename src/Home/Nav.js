// src/components/Home.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Nav() {
  const [activePage, setActivePage] = useState("home");
  const location = useLocation();

  React.useEffect(() => {
    const path = location.pathname;
    if (path === "/") setActivePage("home");
    else if (path === "/formExample") setActivePage("formExample");
    else if (path === "/jobForm") setActivePage("jobForm");
    else if (path === "/jobAction") setActivePage("jobAction");
  }, [location.pathname]);

  return (
    <nav className=" p-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <ul className="flex justify-center font-medium ">
        <li className={` mx-2 ${activePage === "home" ? "text-red-500" : ""}`}>
          <Link to="/">Home</Link>
        </li>
        <li
          className={`mx-2 ${
            activePage === "formExample" ? "text-red-500" : ""
          }`}
        >
          <Link to="/formExample">Form Example</Link>
        </li>
        <li
          className={`mx-2 ${activePage === "jobForm" ? "text-red-500" : ""}`}
        >
          <Link to="/jobForm">Job Forms</Link>
        </li>
        <li
          className={`mx-2 ${activePage === "jobAction" ? "text-red-500" : ""}`}
        >
          <Link to="/jobAction">Job Action</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
