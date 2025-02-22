import { forwardRef, useState } from "react";

import ActionToggleBtn from "./actionToggleBtn";

interface Props {
  isSidebarActive: boolean;
  setIsSidebarActive: (tab: boolean) => void;
}

interface FormData {
  botname: string;
}

const CreateNewBot = forwardRef<HTMLDivElement, Props>(
  ({ setIsSidebarActive }, ref) => {
    const [formData, setFormData] = useState<FormData>({ botname: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      const { name, value } = e.target;

      setFormData({ ...formData, [name]: value });
    };

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
          <p className="text-sm flex flex-col gap-1">
            <span className="flex gap-2 text-xl">
              <i className="fa-solid fa-robot my-auto text-lg"></i>
              <span className="text-sm my-auto">Create New Bot</span>
            </span>
            <span className="text-xs">Create and set the bot up</span>
          </p>
          <button
            className="gradient-1 px-2 py-1 rounded-md flex text-black cursor-pointer  my-auto"
            onClick={() => setIsSidebarActive(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="p-4">
          <h1 className="mb-2 text-xl font-bold">
            {formData.botname ? formData.botname : "BotName"}
          </h1>
          <form action="#" className="flex flex-col gap-2 text-xs">
            <div className="form-control flex justify-between pb-2 border-b-2 border-grey-3">
              <label htmlFor="botname" className="text-grey-2 my-auto">
                Bot Name
              </label>
              <input
                type="text"
                value={formData.botname}
                onChange={handleChange}
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

export default CreateNewBot;
