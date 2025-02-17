import { useState } from "react";

const actionToggleBtn: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <button className="flex gap-2 bg-dark-2 border-grey-3 py-1 px-3 rounded-md">
      <span className="my-auto">Off</span>
      <span className="inline-block bg-grey-2 rounded-2xl relative w-5 h-3 my-auto">
        <span className="absolute left-0 top-0 w-3 h-full bg-white rounded-2xl"></span>
      </span>
    </button>
  );
};

export default actionToggleBtn;
