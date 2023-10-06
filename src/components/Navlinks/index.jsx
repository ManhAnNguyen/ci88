import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="navlinks">
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        About
      </NavLink>

      <NavLink
        to={"/products"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Products
      </NavLink>
      <NavLink
        to={"/admin"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Admin
      </NavLink>
      <NavLink
        to={"/contact"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Contacts
      </NavLink>

      <Link
        to={"https://reactrouter.com/en/main/components/nav-link"}
        target="__blank"
      >
        Go to docs react-router-dom
      </Link>
    </div>
  );
};

export default NavLinks;
