export type Asset = {
  type: "asset";
  name: string;
};

export type Folder = {
  type: "folder";
  name: string;
  content: (Folder | Asset)[];
};

export type FolderStatus = {
  name: string;
  showSubFolders: boolean;
  selected: boolean;
};
