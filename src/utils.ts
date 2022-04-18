import { FolderStatus, Folder, ResourceType } from "./types";

// export function initFolderStatusArray(
//   folderStatusArr: FolderStatus[],
//   folder: Folder
// ) {
//   folderStatusArr.push({
//     name: folder.name,
//     showSubFolders: false,
//     selected: false,
//   });

//   for (const resource of folder.content) {
//     if (resource.type === ResourceType.folder)
//       initFolderStatusArray(folderStatusArr, resource);
//   }
//   return folderStatusArr;
// }

export function initFolderStatusArray(folder: Folder) {
  const initialFolderStatusArray: FolderStatus[] = [];
  initialFolderStatusArray.push({
    name: folder.name,
    showSubFolders: true,
    selected: true,
  });

  function setFolderStatus(folderContent: Folder["content"]) {
    for (const resource of folderContent) {
      if (resource.type === ResourceType.folder) {
        initialFolderStatusArray.push({
          name: resource.name,
          showSubFolders: false,
          selected: false,
        });
        setFolderStatus(resource.content);
      }
    }
  }

  setFolderStatus(folder.content);

  return initialFolderStatusArray;
}

export function findFolder(
  folder: Folder,
  name: string | undefined
): Folder | null {
  const arr: Folder[] = [];

  function findFolderRecursive(folder: Folder, name: string | undefined) {
    if (folder.name === name) {
      arr.push(folder);
    } else {
      for (const resource of folder.content) {
        if (resource.type === ResourceType.folder)
          findFolderRecursive(resource, name);
      }
    }
  }

  findFolderRecursive(folder, name);
  return arr.length ? arr[0] : null;
}
