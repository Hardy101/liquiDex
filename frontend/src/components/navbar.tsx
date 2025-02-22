import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <>
      <nav className="flex gap-8 px-8 py-4 bg-dark-2 text-light-1">
        <h1 className="grow my-auto">Dashboard</h1>
        <form
          action="#"
          className="flex border border-grey-3 rounded-md pl-2 py-2 my-auto text-xs bg-dark-1"
        >
          <i className="fa-solid fa-magnifying-glass my-auto"></i>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            className="grow my-auto px-2 outline-none"
          />
        </form>

        <ul className="flex gap-4 my-auto text-sm">
          <li>
            <Link
              to="/settings"
              className="bg-dark-1 border-1 border-dark-3 rounded-lg p-2 flex"
            >
              <i className="fa-solid fa-gear m-auto"></i>
            </Link>
          </li>
          <li>
            <Link
              to="/notifications"
              className="bg-dark-1 border-1 border-dark-3 rounded-lg p-2 flex"
            >
              <i className="fa-solid fa-bell m-auto"></i>
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="bg-dark-1 border-1 border-dark-3 rounded-lg p-2 flex"
            >
              <i className="fa-solid fa-wallet m-auto"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
