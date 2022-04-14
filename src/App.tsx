import React from "react";
import IconButton from "./components/IconButton";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import TopRow from "./components/TopRow";

function App() {
  return (
    <div className="container mx-auto border-[1px] border-gray-200">
      <div className="grid grid-rows-[auto_minmax(400px,1fr)] grid-cols-[min(250px)_1fr]">
        <TopRow>
          <IconButton icon="folder" label="New folder" />
          <IconButton icon="upload" fill={false} label="Upload" />
          <IconButton icon="refresh" fill={false} label="Refresh" />
        </TopRow>
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  );
}

export default App;
