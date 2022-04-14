import React from "react";

const TopRow = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex col-span-2 gap-6 p-3 bg-gray-50 border-b-[1px] border-gray-200 select-none">
      {children}
    </div>
  );
};

export default TopRow;
