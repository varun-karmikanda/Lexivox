import React, { useState,useEffect,useRef } from 'react'
import Transcription from './Transcription';
import Translation from './Translation';

export default function Information(props) {

  const {output} = props;

  const [tab,setTab] = useState('transcription');
  const [translation,setTranslation] = useState(null);
  const [translating,setTranslating] = useState(null);
  const [toLanguage,setToLanguage] = useState('Select language');

  const worker = useRef();

  useEffect(()=>{
    if (!worker.current) {
      worker.current = new Worker(
        new URL("../utils/translate.worker.js", import.meta.url),
        {
          type: "module",
        }
      );
    }
    const onMessageReceived = async (e) => {
      switch (e.data.status) {
        case "initiate":
          console.log("DOWNLOADING");
          break;
        case "progress":
          console.log("LOADING");
          break;
        case "update":
          setTranslation(e.data.output);
          console.log(e.data.output);
          break;
        case "complete":
          setTranslating(false);
          console.log("DONE");
          break;
      }
    };

    worker.current.addEventListener("message", onMessageReceived);

    return () =>
      worker.current.removeEventListener("message", onMessageReceived);
  })

  const textElement = tab === 'transcription' ? output.map(val => val.text) : translation || 'No translation';

  function handleCopy(){
    navigator.clipboard.writeText(textElement);
  }

  function handleDownload(){
    const element = document.createElement('a');
    const file = new Blob([textElement],{ type:'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `Lexivox_${(new Date()).toDateString()}.txt`;
    document.body.appendChild(element);
    element.click();
  }

  function generateTranslation(){
    if(translating || toLanguage === 'Select language'){
      return;
    }
    setTranslating(true);
    worker.current.postMessage({
      text: output.map(val => val.text),
      src_lang: 'eng_Latn',
      tgt_lang:toLanguage
    })
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
          <Transcription {...props} textElement={textElement}/>
        ) : (
          <Translation {...props} toLanguage={toLanguage} translating={translating} textElement={textElement} setToLanguage={setToLanguage} setTranslating={setTranslating} setTranslation={setTranslation} generateTranslation={generateTranslation}/>
        )}
      </div>
      <div className='flex items-center gap-4 mx-auto'>
        <button onClick={handleCopy} title='copy' className='p-2.5 text-pink-300 pinkShadow hover-animate-color-fade aspect-square grid place-items-center'>
          <i className="fa-solid fa-copy"></i>
        </button>
        <button onClick={handleDownload} title='download' className='p-2.5 text-pink-300 pinkShadow hover-animate-color-fade aspect-square grid place-items-center'>
          <i className="fa-solid fa-download"></i>
        </button>
      </div>
    </main>
  )
}
