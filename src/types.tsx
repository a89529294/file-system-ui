export enum ResourceType {
  asset,
  folder,
}

export type Asset = {
  type: ResourceType.asset;
  name: string;
};

export type Folder = {
  type: ResourceType.folder;
  name: string;
  content: (Folder | Asset)[];
};

export type FolderStatus = {
  name: string;
  showSubFolders: boolean;
  selected: boolean;
};

export type TableRowHeaderProps = {
  isHeader: true;
};

export type TableRowProps = {
  isHeader: false;
  name: string;
  date: string;
};
