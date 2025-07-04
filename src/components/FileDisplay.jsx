import React from 'react'

export default function FileDisplay(props) {
  const {file,audioStream,handleAudioReset,handleFormSubmission} = props;
  return (
    <main className="flex-1 p-4 flex flex-col gap-1 sm:gap-2 justify-center text-center pb-30 w-72 sm:w-96 max-w-full mx-auto">
      <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
        Your<span className="text-pink-300 bold animate-color-fade"> File</span>
      </h1>
      <div className='flex flex-col text-left my-4'>
        <h3 className='font-semibold'>Name</h3>
        <p>{file ? file?.name : 'Custom audio'}</p>
      </div>
      <div className='flex items-center justify-between gap-4'>
        <button onClick={handleAudioReset} className='pinkShadow text-slate-400 px-2 py-1.5 hover-animate-color-fade font-medium'>
          Reset
        </button>
        <button onClick={handleFormSubmission} className='pinkShadow text-pink-400 px-2 py-1.5 hover-animate-color-fade flex items-center gap-2 font-medium'>
          <p>Transcribe</p>
          <i className="fa-solid fa-pencil"></i>
        </button>
      </div>
    </main>
  )
}
