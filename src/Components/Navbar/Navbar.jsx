import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { auth } from "../../Config/Firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const logOut = async () => {
    try {
      console.log("clicked");

      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/"}>Register</NavLink>
        </li>
        <li>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
      </ul>
      <svg
        onClick={logOut}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        className="bi bi-x"
        viewBox="0 0 16 16"
      >
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
      </svg>
    </nav>
  );
};

export default Navbar;
