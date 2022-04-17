import { ResourceType } from "./types";

export const parentFolder = {
  type: ResourceType.folder as const,
  name: "Root Folder",
  content: [
    {
      type: ResourceType.folder as const,
      name: "Documents",
      content: [
        {
          type: ResourceType.folder as const,
          name: "Documents - 1",
          content: [
            {
              type: ResourceType.folder as const,
              name: "Documents - 1 - 1",
              content: [],
            },
          ],
        },
        {
          type: ResourceType.asset as const,
          name: "2000-diary.txt",
        },
      ],
    },
    {
      type: ResourceType.folder as const,
      name: "Music",
      content: [
        { type: ResourceType.asset as const, name: "song.mp3" },
        { type: ResourceType.asset as const, name: "song - 1.mp3" },
        { type: ResourceType.asset as const, name: "song - 2.mp3" },
      ],
    },
    {
      type: ResourceType.asset as const,
      name: "My secret plan.txt",
    },
  ],
};
