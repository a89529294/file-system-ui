import React, { useState } from "react";

export const Modal = ({
  children,
  show,
  setShow,
}: {
  children: React.ReactNode;
  show: boolean;
  setShow: (arg: boolean) => void;
}) => {
  return (
    <>
      {show && (
        <div
          onClick={() => setShow(false)}
          className="absolute top-0 left-0 z-10 grid w-full h-full bg-zinc-500/60 place-items-center"
        >
          <div onClick={(e) => e.stopPropagation()}>{children}</div>
        </div>
      )}
    </>
  );
};
