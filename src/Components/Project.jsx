import React from 'react'
import {PROJECTS} from "../constants"

function Project(){

    return(
    
    <div className="border-b border-neutral-900 pb-4">
    <h1 className="my-20 text-center font-semibold bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent ">Project</h1>
    <div>
   {
    PROJECTS.map((pro, index)=>{
     return (
      <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/4'>
        <h5 className='mb-2 font-semibold text-neutral-300'>{pro.title}</h5>
        </div>
        <div className='w-full max-w-xl lg:w-3/4'>
  
          <p className="mb-4 text-neutral-400">{pro.description} <a className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800" href={pro.link} target="_blank">Link</a></p>
          {pro.technologies.map((tech, index)=>{
            return (
              <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">{tech}</span>
            )
          })}
        </div>
       </div>
     )
    })
   }
   
  </div>
  </div>
       )
   
     
   
    
}


export default Project