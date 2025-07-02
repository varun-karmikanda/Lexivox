import React from "react";

export default function () {
  return (
    <main className="flex-1 p-4 flex flex-col gap-3 sm:gap-4 md:gap-5 justify-center text-center pb-30">
      <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
        Lexi<span className="text-pink-300 bold">Vox</span>
      </h1>
      <h3 className="font-medium md:text-lg">
        Record{" "}
        <span className="text-pink-400">&rarr;</span> Transcribe{" "}
        <span className="text-pink-400">&rarr;</span> Translate
      </h3>
      <button className="flex items-center justify-between text-base mx-auto w-72 max-w-full my-4">
        <p>Record</p>
        <i className="fa-solid fa-microphone"></i>
      </button>
      <p className="text-base md:text-lg">Or just <label className="text-pink-300 cursor-pointer hover:text-pink-600 duration-200 font-semibold">upload<input className="hidden" type="file" accept=".mp3,.wave"/></label> .mp3</p>
      <p className="italic text-pink-400">Forever-free, because duh <span className="font-bold">&lt;3</span></p>
    </main>
  );
}
