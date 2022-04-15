import React, { useState } from "react";

import IconButton from "./components/IconButton";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import TopRow from "./components/TopRow";

import { Folder, FolderStatus, Asset, ResourceType } from "./types";
import { parentFolder } from "./data";
import { initFolderStatusArray } from "./utils";

const arr: FolderStatus[] = [];
const value = initFolderStatusArray(arr, parentFolder);

function App() {
  const [rootFolder, setRootFolder] = useState<Folder>(parentFolder);
  const [folderStatusArray, setFolderStatusArray] =
    useState<FolderStatus[]>(value);

  return (
    <div className="container mx-auto border-[1px] border-gray-200 text-sm">
      <div className="grid grid-rows-[auto_minmax(400px,1fr)] grid-cols-[min(250px)_1fr]">
        <TopRow>
          <IconButton icon="folder" label="New folder" />
          <IconButton icon="upload" fill={false} label="Upload" />
          <IconButton icon="refresh" fill={false} label="Refresh" />
        </TopRow>
        <LeftPanel
          rootFolder={rootFolder}
          folderStatusArray={folderStatusArray}
          setFolderStatusArray={setFolderStatusArray}
        />
        <RightPanel />
      </div>
    </div>
  );
}

export default App;
