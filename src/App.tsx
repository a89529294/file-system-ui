import React, { useState } from "react";

import IconButton from "./components/IconButton";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import TopRow from "./components/TopRow";

import { Folder, FolderStatus } from "./types";
import { parentFolder } from "./data";
import { initFolderStatusArray } from "./utils";
import { Modal } from "./components/Modal";
import NewFolderModalBody from "./components/NewFolderModalBody";

const value = initFolderStatusArray(parentFolder);

function App() {
  const [rootFolder, setRootFolder] = useState<Folder>(parentFolder);
  const [folderStatusArray, setFolderStatusArray] =
    useState<FolderStatus[]>(value);
  const [showNewFolderModal, setShowNewFolderModal] = useState(false);

  return (
    <div className="container mx-auto border-[1px] border-gray-200 text-sm">
      <div className="grid grid-rows-[auto_minmax(400px,1fr)] grid-cols-[minmax(250px,auto)_1fr] relative">
        <TopRow>
          <IconButton
            icon="folder"
            label="New folder"
            onClick={() => {
              setShowNewFolderModal(true);
            }}
          />
          <IconButton icon="upload" fill={false} label="Upload" />
          <IconButton icon="refresh" fill={false} label="Refresh" />
        </TopRow>
        <LeftPanel
          rootFolder={rootFolder}
          folderStatusArray={folderStatusArray}
          setFolderStatusArray={setFolderStatusArray}
        />
        <RightPanel
          rootFolder={rootFolder}
          folderStatusArray={folderStatusArray}
        />
        <Modal show={showNewFolderModal} setShow={setShowNewFolderModal}>
          <NewFolderModalBody setShow={setShowNewFolderModal} />
        </Modal>
      </div>
    </div>
  );
}

export default App;
