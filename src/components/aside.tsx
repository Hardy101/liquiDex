import React from "react";
import { Link } from "react-router-dom";

// Media
import Logo from "../assets/logo.png";

const AsidesSection: React.FC = () => {
  const asides_nav_link = [
    { icon: "lni lni-dashboard-square-1", path: "/", status: "not-active" },
    { icon: "lni lni-android", path: "/bots", status: "not-active" },
    { icon: "lni lni-database-2", path: "#", status: "not-active" },
    { icon: "lni lni-bar-chart-4", path: "/analytics", status: "not-active" },
  ];

  return (
    <>
      <aside className="fixed top-0 h-screen bg-dark-2 text-white p-4 border-r border-grey-3">
        <div className="h-full flex flex-col gap-16">
          <a>
            <img src={Logo} alt="logo" className="w-8" />
          </a>
          <ul className="grow mx-auto text-xl flex flex-col gap-3">
            {asides_nav_link.map(({ icon, path, status }, index) => {
              const isActive = location.pathname === path ? "active" : status;
              return (
                <li key={index} className={isActive}>
                  <Link to={path} className="flex p-1">
                    <i className={icon}></i>
                  </Link>
                </li>
              );
            })}
          </ul>

          <ul className="mx-auto text-xl grid gap-3">
            <li>
              <a>
                <i className="lni lni-gear-1"></i>
              </a>
            </li>
            <li>
              <a>
                <i className="lni lni-question-mark-circle"></i>
              </a>
            </li>
            <li>
              <a>
                <i className="lni lni-enter"></i>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default AsidesSection;
