import React, { useState, useContext, createContext } from "react";
import { ChevronRight, ChevronDown, Folder as FolderIcon } from "react-feather";

//name of folders should be unique

type Folder = {
  name: string;
  content: Folder[];
};

type FolderStatus = { name: string; open: boolean };

const FolderRow = ({
  folder,
  folderStatusArray,
  setFolderStatusArray,
}: {
  folder: Folder;
  setFolderStatusArray: Function;
  folderStatusArray: FolderStatus[];
}) => {
  const currentFolderStatus = folderStatusArray.find(
    (folderStatus) => folderStatus.name === folder.name
  );

  const render = (content: Array<Folder>) => {
    return (
      <ul>
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

  return (
    <li className="pl-4">
      <div
        className="flex gap-2 py-2 cursor-pointer hover:bg-slate-100"
        onClick={(e) => {
          setFolderStatusArray((folderStatusArray: FolderStatus[]) => {
            console.log(
              folderStatusArray.find((item) => item.name === folder.name)
            );
            return folderStatusArray.map((folderStatus) =>
              folderStatus.name === folder.name
                ? { ...folderStatus, open: !folderStatus.open }
                : folderStatus
            );
          });
        }}
      >
        {folder.content.length ? (
          <ChevronRight size={20} />
        ) : (
          <div className="w-5" />
        )}
        <FolderIcon size={20} />
        {folder.name}
      </div>
      {folder.content.length > 0 &&
        currentFolderStatus?.open &&
        render(folder.content)}
    </li>
  );
};

const LeftPanel = () => {
  const [rootFolder, setRootFolder] = useState<Folder>({
    name: "Root Folder",
    content: [
      {
        name: "Documents",
        content: [
          { name: "Documents - 1", content: [] },
          { name: "Documents - 2", content: [] },
        ],
      },
      { name: "Music", content: [] },
    ],
  });
  const [folderStatusArray, setFolderStatusArray] = useState<FolderStatus[]>([
    { name: "Root Folder", open: false },
    { name: "Documents", open: false },
    { name: "Documents - 1", open: false },
    { name: "Documents - 2", open: false },
    { name: "Music", open: false },
  ]);

  return (
    <ul>
      <FolderRow
        folder={rootFolder}
        folderStatusArray={folderStatusArray}
        setFolderStatusArray={setFolderStatusArray}
      />
    </ul>
  );
};

export default LeftPanel;
