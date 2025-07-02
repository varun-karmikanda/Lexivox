import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-4 p-4">
      <h1 className="font-medium text-xl">
        Lexi<span className="text-pink-300 bold animate-color-fade">Vox</span>
      </h1>
      <button className="flex items-center gap-2 text-pink-400 pinkShadow hover-animate-color-fade px-2 py-1.5 text-sm">
        <p>New</p>
        <i className="fa-solid fa-plus"></i>
      </button>
    </header>
  );
}
