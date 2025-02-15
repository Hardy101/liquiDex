import React from "react";

const NavBar: React.FC = () => {
  return (
    <>
      <nav className="flex gap-8 px-8 py-4 bg-dark-2 text-light-1">
        <h1 className="grow my-auto">Dashboard</h1>
        <form
          action="#"
          className="flex border border-grey-3 rounded-md pl-2 py-2 my-auto text-xs bg-dark-1"
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
          <li className="bg-dark-1 border-1 border-dark-3 rounded-lg py-2 px-2 flex">
            <i className="lni lni-gear-1 m-auto"></i>
          </li>
          <li className="bg-dark-1 border-1 border-dark-3 rounded-lg py-2 px-2 flex">
            <i className="lni lni-bell-1 m-auto"></i>
          </li>
          <li className="bg-dark-1 border-1 border-dark-3 rounded-lg py-2 px-2 flex">
            <i className="lni lni-wallet-1 m-auto"></i>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
