import React, { useRef } from "react";
import { Folder as FolderIcon, Search, FileText } from "react-feather";

import {
  Folder,
  FolderStatus,
  ResourceType,
  TableRowHeaderProps,
  TableRowProps,
} from "../types";
import { findFolder } from "../utils";

const TableRow = (props: TableRowHeaderProps | TableRowProps) => {
  const isHeader = props.isHeader;
  let name, date, size, type;
  switch (props.isHeader) {
    case true:
      name = "Name";
      date = "Modified";
      size = "Size";
      type = ResourceType.folder;
      break;
    case false:
      name = props.name;
      date = props.date;
      size = "";
      type = props.type;
      break;
  }

  return (
    <div className="flex px-8 py-2 border-b-[1px] border-gray-200">
      <div
        className={`flex gap-4 flex-[7] ${
          isHeader ? "font-medium text-tableHeader" : "text-tableCellName"
        }`}
      >
        {type === ResourceType.folder ? (
          <FolderIcon size={20} />
        ) : (
          <FileText size={20} />
        )}

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

const Table = ({ selectedFolder }: { selectedFolder: Folder | null }) => {
  return (
    <div className="">
      <TableRow isHeader={true} />
      {selectedFolder?.content.map((asset) => (
        <TableRow
          isHeader={false}
          type={asset.type}
          name={asset.name}
          date="April 15, 2022"
          key={asset.name}
        />
      ))}
    </div>
  );
};

const RightPanel = ({
  rootFolder,
  folderStatusArray,
}: {
  rootFolder: Folder;
  folderStatusArray: FolderStatus[];
}) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const selectedFolderName = folderStatusArray.find(
    (folder) => folder.selected
  )?.name;
  const selectedFolder = findFolder(rootFolder, selectedFolderName);
  console.log(selectedFolder);

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
      <Table selectedFolder={selectedFolder} />
    </div>
  );
};

export default RightPanel;
