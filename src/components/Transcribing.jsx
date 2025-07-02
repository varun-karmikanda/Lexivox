import React from 'react'

export default function Transcribing({ downloading }) {
  return (
    <div className='flex items-center flex-col justify-center gap-10 md:gap-14 flex-1 pb-24 p-4 text-center'>
      <div className='flex flex-col gap-2 sm:gap-4'>
        <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
          <span className="text-pink-300 font-bold animate-color-fade">
            {downloading ? 'Decoding Reality' : 'Dialing the Grammar Gods'}
          </span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 tracking-wide">
          {downloading
            ? '⚡ Core memory channels synchronized'
            : '🧠 Linguistic cortex warming up...'}
        </p>
      </div>
      <div className='flex flex-col gap-2 sm:gap-3 max-w-[350px] mx-auto w-full'>
        {[0, 1, 2].map(val => (
          <div
            key={val}
            className={`rounded-full h-2 sm:h-[10px] bg-gradient-to-r from-pink-300 via-fuchsia-400 to-pink-500 loading loading${val}`}
          ></div>
        ))}
      </div>
    </div>
  )
}
