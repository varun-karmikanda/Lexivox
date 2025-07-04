import React from 'react'
import { LANGUAGES } from '../utils/presets';

export default function Translation(props) {

  const {translation,toLanguage,translating,setTranslation,setTranslating,setToLanguage,textElement,generateTranslation} = props;

  return (
    <div className='flex flex-col gap-2 max-w-[400px] mx-auto'>
      {!translating && (<div className='flex flex-col gap-1'>
        <p className='text-xs sm:text-sm font-medium mr-auto animate-color-fade'>To language</p>
        <div className='flex items-stretch gap-2'>
          <select value={toLanguage} className='flex-1 outline-none bg-white focus:outline-none p-1 rounded border-2 border-solid border-transparent hover:border-pink-600 duration-200 pinkShadow text-pink-400 hover:text-pink-600' onChange={(e)=>setToLanguage(e.target.value)}>
            <option value={'Select language'}>Select language</option>
            {Object.entries(LANGUAGES).map(([key,value])=>{
              return(
                <option key={key} value={value}>{key}</option>
              )
            })}
          </select>
          <button onClick={generateTranslation} className='text-pink-400 pinkShadow hover-animate-color-fade px-2'>Translate</button>
        </div>
      </div>)}
      {(textElement && !translating) && (
        <p>{textElement}</p>
      )}
      {translating && (
        <div className='grid place-items-center'>
          <i className="fa-solid fa-spinner animate-spin"></i>
        </div>
      )}
    </div>
  )
}
