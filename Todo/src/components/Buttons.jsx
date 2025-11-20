import React from "react";

const Buttons = () => {
  return (
    <div className="flex items-center gap-4 mb-[30px] justify-center">
      <button className="px-4 py-2 bg-green-500 text-white cursor-pointer rounded-sm focus:bg-red-500">
        All
      </button>
      <button className="px-4 py-2 bg-green-500 text-white cursor-pointer rounded-sm focus:bg-red-500">
        Completed
      </button>
      <button className="px-4 py-2 bg-green-500 text-white cursor-pointer rounded-sm focus:bg-red-500">
        Incompleted
      </button>
    </div>
  );
};

export default Buttons;
