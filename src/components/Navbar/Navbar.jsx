import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useBookContext } from "../../Api/allData";

const Navbar = () => {
  const { cart } = useBookContext()
  return (
    <div className="navbar bg-base-100 border-b-2 mb-20 fixed z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/books"}>All Books</NavLink>
            </li>
          </ul>
        </div>
        <Link
          className="btn btn-ghost normal-case text-xl px-0 border-0"
          to={"/"}
        >
          <img src="\logo.png" className="h-full w-full" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/books"}>All Books</NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end"><NavLink to={'/cart'}>
        <label tabIndex={0} className="btn btn-ghost btn-circle me-5 bg-slate-300">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item">{ cart?.length }</span>
          </div>
        </label></NavLink>
      </div>
    </div>
  );
};

export default Navbar;
