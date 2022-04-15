import { FolderStatus, Folder, ResourceType } from "./types";

export function initFolderStatusArray(
  folderStatusArr: FolderStatus[],
  folder: Folder
) {
  folderStatusArr.push({
    name: folder.name,
    showSubFolders: false,
    selected: false,
  });

  for (const resource of folder.content) {
    if (resource.type === ResourceType.folder)
      initFolderStatusArray(folderStatusArr, resource);
  }
  return folderStatusArr;
}
