import React, { useState } from 'react'
import Transcription from './Transcription';
import Translation from './Translation';

export default function Information() {

  const [tab,setTab] = useState('transcription');

  return (
    <main className="flex-1 p-4 flex flex-col gap-1 sm:gap-2 justify-center text-center pb-30 max-w-prose w-full mx-auto">
      <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl pb-3">
        Your<span className="text-pink-300 bold animate-color-fade"> Transcription</span>
      </h1>
      <div className='grid grid-cols-2 mx-auto bg-white shadow rounded-md overflow-hidden items-center'>
        <button onClick={()=>{
          setTab('transcription')
        }} className={'px-4 py-1 duration-200 font-medium pop-on-hover animate-color-fade '+ (tab === 'transcription' ? 'tab-selected' : 'text-pink-400 hover-animate-color-fade')}>
          Transcription
        </button>
        <button onClick={()=>{
          setTab('translation')
        }} className={'px-4 py-1 duration-200 font-medium pop-on-hover animate-color-fade '+ (tab === 'translation' ? 'tab-selected' : 'text-pink-400 hover-animate-color-fade')}>
          Translation
        </button>
      </div>
      {tab === 'transcription' ? (
        <Transcription/>
      ) : (
        <Translation/>
      )}
    </main>
  )
}
