import React from "react";
import { Link } from "react-router-dom";

// Media
import Logo from "../assets/logo.png";

const AsidesSection: React.FC = () => {
  const asides_nav_link = [
    { icon: "fas fa-th", path: "/", status: "not-active" },
    { icon: "fa-solid fa-robot", path: "/bots", status: "not-active" },
    { icon: "fa-solid fa-database", path: "#", status: "not-active" },
    { icon: "fa-solid fa-chart-simple", path: "/analytics", status: "not-active" },
  ];

  return (
    <>
      <aside className="fixed top-0 h-screen bg-dark-2 text-white p-4 border-r border-grey-3">
        <div className="h-full flex flex-col gap-16">
          <a>
            <img src={Logo} alt="logo" className="w-8" />
          </a>
          <ul className="grow mx-auto text-lg flex flex-col gap-3">
            {asides_nav_link.map(({ icon, path, status }, index) => {
              const isActive = location.pathname === path ? "active" : status;
              return (
                <li key={index} className={`mx-auto ${isActive}`}>
                  <Link to={path} className="flex p-1">
                    <i className={icon}></i>
                  </Link>
                </li>
              );
            })}
          </ul>

          <ul className="mx-auto text-md grid gap-3">
            <li className="mx-auto">
              <a>
                <i className="fa-solid fa-gear"></i>
              </a>
            </li>
            <li className="mx-auto">
              <a>
              <i className="fa-solid fa-question"></i>
              </a>
            </li>
            <li className="mx-auto">
              <a>
              <i className="fa-solid fa-right-to-bracket"></i>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default AsidesSection;
