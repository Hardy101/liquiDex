import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/userContext";

// Media
import Logo from "../assets/logo.png";

const AsidesSection: React.FC = () => {
  const logout = () => {
    fetch("http://localhost:8000/api/auth/logout", {
      method: "POST",
      credentials: "include",
    }).then(() => {
      localStorage.removeItem("user");
    });
  };

  const { user } = useUser();

  const asides_nav_link = [
    { icon: "fas fa-th", path: "/", status: "not-active" },
    { icon: "fa-solid fa-robot", path: "/bots", status: "not-active" },
    { icon: "fa-solid fa-database", path: "/database", status: "not-active" },
    {
      icon: "fa-solid fa-chart-simple",
      path: "/analytics",
      status: "not-active",
    },
  ];

  return (
    <>
      <aside className="fixed top-0 h-screen bg-dark-2 text-white p-4 border-r border-grey-3 z-20 my-auto">
        <div className="h-full flex items-stretch flex-col gap-16">
          <a>
            <img src={Logo} alt="logo" className="w-8" />
          </a>
          <ul className="mx-auto text-lg flex flex-col gap-3">
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

          <ul className="mx-auto text-md mt-auto flex flex-col gap-3">
            <Link to="/settings" className="mx-auto">
              <i className="fa-solid fa-gear"></i>
            </Link>
            <li className="mx-auto">
              <i className="fa-solid fa-question"></i>
            </li>
            <Link to={user ? "/auth" : "#"} className="mx-auto">
              <i
                onClick={user ? logout : undefined}
                className={`fa-solid ${
                  user ? "fa-right-from-bracket" : "fa-right-to-bracket"
                }`}
              ></i>
            </Link>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default AsidesSection;
