import React, { useState } from "react";
import { ChevronRight, Folder as FolderIcon } from "react-feather";

const size = 20;

type Asset = {
  type: "asset";
  name: string;
};

type Folder = {
  type: "folder";
  name: string;
  content: (Folder | Asset)[];
};

const LeftPanel = () => {
  const [fileStructure, setFileStructure] = useState<Folder>({
    type: "folder",
    name: "Root Folder",
    content: [
      { type: "folder", name: "Documents", content: [] },
      { type: "asset", name: "diary.txt" },
    ],
  });

  return (
    <ul>
      <li className="py-2 px-4 flex gap-2 cursor-pointer hover:bg-slate-100">
        <ChevronRight size={size} />
        <FolderIcon size={size} />
        {fileStructure.name}
      </li>
      <li>
        <ul>
          {fileStructure.content.map((item) => {
            if (item.type === "folder") return <li>i am folder</li>;
            return <li>i am asset</li>;
          })}
        </ul>
      </li>
    </ul>
  );
};

export default LeftPanel;
