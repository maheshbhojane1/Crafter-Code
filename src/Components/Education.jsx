import React from 'react'
import { EDUCATION } from '../constants'

function Education() {
  return (
    <>
    <div className="border-b border-neutral-900 pb-4">
    <h1 className="my-20 text-center font-semibold bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Education</h1>
    <div>
     {
      EDUCATION.map((education, index)=>{
       return (
         <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
          <div className='w-full lg:w-1/4'>
          <p className='mb-2 font-semibold text-neutral-300'>{education.year}</p>
          </div>
          <div className='w-full max-w-xl lg:w-3/4'>
          <p className='mb-2 font-semibold'>
            {education.degree} - <span className='text-purple-100'>
              {education.specification} - <span className='text-purple-100'>{education.cgpa}</span>
            </span>
            </p>
            <p className='mb-2 text-sm text-neutral-400'>{education.collage}</p>
          </div>
         </div>
         )
      })}
     
    </div>
  </div>
  </>
  )
}

export default Education