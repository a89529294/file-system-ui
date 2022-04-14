import React, { useRef } from "react";
import { Folder, Search } from "react-feather";

const RightPanel = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="select-none">
      <div className="flex justify-between px-4 py-2 border-b-[1px] border-gray-200">
        <span>Files</span>
        <div className="relative flex items-center gap-2 text-sm">
          <Search onClick={() => searchInputRef?.current?.focus()} size={20} />
          <input
            placeholder="Search Files"
            className="outline-none peer"
            ref={searchInputRef}
          />
          <label className="absolute inset-0 flex translate-y-1 border-gray-400 pointer-events-none peer-focus:border-b-2 peer-hover:border-b-2" />
        </div>
      </div>
      <div className="flex px-4 py-2 border-b-[1px] border-gray-200">
        <div className="flex gap-2 font-bold">
          <Folder />
          Name
        </div>
        <div className="w-48 px-4 ml-auto text-gray-500">Modified</div>
        <div className="px-4 text-gray-500 w-28">Size</div>
      </div>
    </div>
  );
};

export default RightPanel;
