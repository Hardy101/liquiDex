import React from "react";

// Media
import Logo from "../assets/logo.png";

const AsidesSection: React.FC = () => {
  return (
    <>
      <aside className="bg-dark-2 text-white p-4 border-r border-grey-3">
        <div className="flex flex-col gap-16">
          <a className="grow">
            <img src={Logo} alt="logo" className="w-8" />
          </a>
          <ul className="grow mx-auto text-2xl grow grid gap-3">
            <li>
              <a href="">
                <i className="lni lni-dashboard-square-1"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="lni lni-database-2"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="lni lni-bar-chart-4"></i>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default AsidesSection;
