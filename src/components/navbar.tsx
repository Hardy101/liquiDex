import React from "react";

const NavBar: React.FC = () => {
  return (
    <>
      <nav className="flex gap-8 px-8 py-4 bg-dark-2 text-light-1">
        <h1 className="grow my-auto">Dashboard</h1>
        <form
          action="#"
          className="flex border border-grey-3 rounded-md pl-2 py-1 my-auto text-xs"
        >
          <i className="lni lni-search-1 my-auto"></i>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            className="grow my-auto px-2 outline-none"
          />
        </form>

        <ul className="flex gap-4 my-auto text-sm">
          <li className="bg-dark-1 border-1 border-grey-1 rounded-lg py-1 px-2">
            <i className="lni lni-gear-1"></i>
          </li>
          <li className="bg-dark-1 border-1 border-grey-1 rounded-lg py-1 px-2">
            <i className="lni lni-bell-1"></i>
          </li>
          <li className="bg-dark-1 border-1 border-grey-1 rounded-lg py-1 px-2">
            <i className="lni lni-wallet-1"></i>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
