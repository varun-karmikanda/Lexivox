import React, { useState } from 'react'
import Transcription from './Transcription';
import Translation from './Translation';

export default function Information(props) {

  const {outpt} = props;

  const [tab,setTab] = useState('transcription');

  function handleCopy(){
    navigator.clipboard.writeText();
  }

  function handleDownload(){
    const element = document.createElement('a');
    const file = new Blob([],{ type:'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download(`Lexivox_${(new Date()).toDateString()}.txt`);
    document.body.appendChild(element);
    element.click();
  }

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
      <div className='flex flex-col my-8'>
        {tab === 'transcription' ? (
          <Transcription {...props}/>
        ) : (
          <Translation {...props}/>
        )}
      </div>
      <div className='flex items-center gap-4 mx-auto'>
        <button title='copy' className='p-2.5 text-pink-300 pinkShadow hover-animate-color-fade aspect-square grid place-items-center'>
          <i className="fa-solid fa-copy"></i>
        </button>
        <button title='download' className='p-2.5 text-pink-300 pinkShadow hover-animate-color-fade aspect-square grid place-items-center'>
          <i className="fa-solid fa-download"></i>
        </button>
      </div>
    </main>
  )
}
