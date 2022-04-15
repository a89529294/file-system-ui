import React, { useRef } from "react";
import { Folder, Search } from "react-feather";

import { TableRowHeaderProps, TableRowProps } from "../types";

const TableRow = (props: TableRowHeaderProps | TableRowProps) => {
  const isHeader = props.isHeader;
  let name, date, size;
  switch (props.isHeader) {
    case true:
      name = "Name";
      date = "Modified";
      size = "Size";
      break;
    case false:
      name = props.name;
      date = props.date;
      size = "";
      break;
  }

  return (
    <div className="flex px-8 py-2 border-b-[1px] border-gray-200">
      <div
        className={`flex gap-4 flex-[7] ${
          isHeader ? "font-medium text-tableHeader" : "text-tableCellName"
        }`}
      >
        <Folder size={20} />
        <span>{name}</span>
      </div>
      <div
        className={`px-4 ml-auto flex-[2] ${
          isHeader
            ? "text-tableHeader text-gray-500"
            : "text-tableCellModified text-gray-700"
        }`}
      >
        {date}
      </div>
      <div
        className={`flex-1 px-4 text-gray-500 ${
          isHeader ? "text-tableHeader" : ""
        }`}
      >
        {size}
      </div>
    </div>
  );
};

const Table = () => {
  return (
    <div className="">
      <TableRow isHeader={true} />
      <TableRow isHeader={false} name="Documents" date="April 15, 2022" />
    </div>
  );
};

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
      <Table />
    </div>
  );
};

export default RightPanel;
