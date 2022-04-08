import React from "react";
import { Folder, Upload, RefreshCw } from "react-feather";

const IconButton = ({
  icon,
  fill = true,
  label,
}: {
  icon: "folder" | "upload" | "refresh";
  label: string;
  fill?: boolean;
}) => {
  const IconMap = {
    folder: Folder,
    upload: Upload,
    refresh: RefreshCw,
  };
  const Icon = IconMap[icon];
  const extraProps = fill ? { fill: "hsl(155, 4%, 44%)" } : {};
  return (
    <button className="flex gap-1 items-center">
      <Icon color="hsl(155, 4%, 44%)" size={20} {...extraProps} />
      {label}
    </button>
  );
};

export default IconButton;
