import React from 'react'

export default function Transcription(props) {

  const {textElement} = props;

  return (
     <div className="px-6 pt-4 pb-6">
      {textElement && (
        <div className="bg-white p-5 rounded-xl shadow-md max-w-3xl mx-auto">
          <p className="fancy-text text-md sm:text-lg md:text-xl leading-relaxed text-center break-words">
            {textElement}
          </p>
        </div>
      )}
    </div>
  )
}
