import React from "react";

function NewFolderModalBody({ setShow }: { setShow: (arg: boolean) => void }) {
  return (
    <div className="flex flex-col justify-between h-40 p-4 bg-white w-80">
      <div className="flex items-center justify-between text-lg">
        Folder
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 cursor-pointer"
          viewBox="0 0 20 20"
          fill="currentColor"
          onClick={() => setShow(false)}
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Enter your folder name"
        className="border-b border-solid outline-none border-gray-600/50"
      />
      <button className="self-end px-2 py-1 text-sm text-red-500 w-fit">
        CREATE
      </button>
    </div>
  );
}

export default NewFolderModalBody;
