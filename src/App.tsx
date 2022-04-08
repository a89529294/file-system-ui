import React from "react";
import IconButton from "./components/IconButton";
import LeftPanel from "./components/LeftPanel";

function App() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-rows-[auto_minmax(400px,1fr)] grid-cols-[min(250px)_1fr]">
        <div className="bg-gray-50 col-span-2 p-3 flex gap-6">
          <IconButton icon="folder" label="New folder" />
          <IconButton icon="upload" fill={false} label="Upload" />
          <IconButton icon="refresh" fill={false} label="Refresh" />
        </div>
        <LeftPanel />
      </div>
    </div>
  );
}

export default App;
