import { Folder, Upload, RefreshCw } from "react-feather";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: "folder" | "upload" | "refresh";
  label: string;
  fill?: boolean;
}

const IconButton = ({
  icon,
  fill = true,
  label,
  ...props
}: IconButtonProps) => {
  const IconMap = {
    folder: Folder,
    upload: Upload,
    refresh: RefreshCw,
  };
  const Icon = IconMap[icon];
  const extraProps = fill ? { fill: "hsl(155, 4%, 44%)" } : {};
  return (
    <button className="flex items-center gap-1" {...props}>
      <Icon color="hsl(155, 4%, 44%)" size={20} {...extraProps} />
      {label}
    </button>
  );
};

export default IconButton;
