import React, { useState } from "react";
import { ChevronRight, ChevronDown, Folder as FolderIcon } from "react-feather";

import { Folder, FolderStatus, Asset, ResourceType } from "../types";

//name of folders should be unique

const FolderRow = ({
  folder,
  folderStatusArray,
  setFolderStatusArray,
}: {
  folder: Folder | Asset;
  setFolderStatusArray: Function;
  folderStatusArray: FolderStatus[];
}) => {
  if (folder.type === ResourceType.asset) return null;

  const currentFolderStatus = folderStatusArray.find(
    (folderStatus) => folderStatus.name === folder.name
  );
  const currentFolderContainsSubFolders =
    folder.content.filter((item) => item.type === ResourceType.folder).length >
    0;

  const render = (content: Folder["content"]) => {
    return (
      <ul className="pl-4">
        {content.map((item) => {
          return (
            <FolderRow
              folder={item}
              folderStatusArray={folderStatusArray}
              setFolderStatusArray={setFolderStatusArray}
              key={item.name}
            />
          );
        })}
      </ul>
    );
  };

  const toggleShowSubFolders = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFolderStatusArray((folderStatusArray: FolderStatus[]) => {
      return folderStatusArray.map((folderStatus) =>
        folderStatus.name === folder.name
          ? {
              ...folderStatus,
              showSubFolders: !folderStatus.showSubFolders,
            }
          : folderStatus
      );
    });
  };

  const selectFolder = () => {
    setFolderStatusArray((folderStatusArray: FolderStatus[]) => {
      return folderStatusArray.map((folderStatus) =>
        folderStatus.name === folder.name
          ? {
              ...folderStatus,
              selected: true,
            }
          : { ...folderStatus, selected: false }
      );
    });
  };

  return (
    <li>
      <div onClick={selectFolder} className="group">
        <div
          className={`${
            currentFolderStatus?.selected
              ? "bg-gray-300"
              : "group-hover:bg-gray-100"
          } absolute left-0 right-0 h-10 -z-10 `}
        />
        <div className={`flex gap-2 py-2 cursor-pointer peer`}>
          {currentFolderContainsSubFolders &&
          currentFolderStatus?.showSubFolders ? (
            <ChevronDown size={20} onClick={toggleShowSubFolders} />
          ) : currentFolderContainsSubFolders ? (
            <ChevronRight size={20} onClick={toggleShowSubFolders} />
          ) : (
            <div className="w-5" />
          )}
          <FolderIcon size={20} />
          {folder.name}
        </div>
      </div>

      {currentFolderContainsSubFolders &&
        currentFolderStatus?.showSubFolders &&
        render(folder.content)}
    </li>
  );
};

const LeftPanel = ({
  rootFolder,
  folderStatusArray,
  setFolderStatusArray,
}: {
  rootFolder: Folder;
  folderStatusArray: FolderStatus[];
  setFolderStatusArray: Function;
}) => {
  return (
    <ul className="border-r-[1px] border-gray-200 select-none relative">
      <FolderRow
        folder={rootFolder}
        folderStatusArray={folderStatusArray}
        setFolderStatusArray={setFolderStatusArray}
      />
    </ul>
  );
};

export default LeftPanel;
