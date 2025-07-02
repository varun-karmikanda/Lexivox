import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-4 p-4">
      <h1 className="font-medium text-xl">
        Lexi<span className="text-pink-300 bold">Vox</span>
      </h1>
      <button className="flex items-center gap-2">
        <p>New</p>
        <i className="fa-solid fa-plus"></i>
      </button>
    </header>
  );
}
