import { forwardRef, useState } from "react";

import ActionToggleBtn from "./minicomponents/actionToggleBtn";

interface Props {
  isSidebarActive: boolean;
  setIsSidebarActive: (tab: boolean) => void;
}

interface FormData {
  botname: string;
}

const Sidebar = forwardRef<HTMLDivElement, Props>(
  ({ setIsSidebarActive }, ref) => {
    return (
      <div
        ref={ref}
        className="createboxsidebar fixed top-16 w-2/5 h-full top-0 right-0 bg-dark-2 rounded-l-md border border-grey-3 z-10 text-light-1"
        style={{
          transform: "translateX(100%)",
          opacity: 0,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between border-b-2 border-grey-3 p-4">
          <h2 className="text-sm my-auto">Create Notification</h2>
          <button
            className="gradient-1 px-2 py-1 rounded-md flex text-black cursor-pointer my-auto"
            onClick={() => setIsSidebarActive(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="p-4">
          <h1 className="mb-2 text-xl font-bold">Notify</h1>
          <form action="#" className="flex flex-col gap-2 text-xs">
            <div className="form-control flex justify-between pb-2 border-b-2 border-grey-3">
              <label htmlFor="botname" className="text-grey-2 my-auto">
                Bot Name
              </label>
              <input
                type="text"
                name="botname"
                id="botname"
                placeholder="Enter Bot Name"
                className="w-2/5 bg-dark-1 rounded-md border border-grey-3 p-2 outline-none my-auto"
              />
            </div>
            <div className="form-control flex justify-between pb-2 border-b-2 border-grey-3">
              <label className="text-grey-2 my-auto">Status</label>
              <ActionToggleBtn />
            </div>
            <div className="form-control flex justify-between pb-2 border-b-2 border-grey-3">
              <label htmlFor="select" className="text-grey-2 my-auto">
                Access
              </label>
              <select
                name=""
                id=""
                className="w-2/5 bg-dark-1 rounded-md border border-grey-3 p-2 outline-none my-auto"
              >
                <option value="select">Select</option>
              </select>
            </div>
            <div className="form-control mt-4">
              <button
                type="button"
                className="w-full gradient-1 p-2 rounded-md text-black"
              >
                Add Bot
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
);

export default Sidebar;
