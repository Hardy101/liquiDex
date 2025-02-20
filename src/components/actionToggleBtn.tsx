import { useState } from "react";

interface Props {
  defaultState?: boolean;
}

const ActionToggleBtn: React.FC<Props> = ({ defaultState }) => {
  const [isActive, setIsActive] = useState(defaultState);

  return (
    <button
      type="button"
      className="flex gap-2 bg-dark-2 border-grey-3 py-1 px-3 rounded-md"
      onClick={() => setIsActive((prev) => !prev)}
    >
      <span className="my-auto status">{isActive ? `On` : "Off"}</span>
      <span
        className={`inline-block ${
          isActive ? "bg-green-300" : "bg-grey-2"
        } rounded-2xl relative w-5 h-3 my-auto transition-colors duration-300`}
      >
        <span
          className={`absolute top-0 w-3 h-full bg-white rounded-2xl transition-transform duration-300 ${
            isActive ? "translate-x-[2px]" : "-translate-x-3"
          }`}
        ></span>
      </span>
    </button>
  );
};

export default ActionToggleBtn;
