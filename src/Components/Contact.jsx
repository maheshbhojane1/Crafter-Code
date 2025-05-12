import React from 'react'
import {CONTACT} from "../constants"

function Contact() {
  return (
    < div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center font-semibold bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent ">Contact</h1>
      <div className='mb-1'>
        {CONTACT.map((con, index)=>{
          return (

          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
        <div className='w-full lg:w-1/4'>
        <h5 className='mb-2 font-semibold text-neutral-300'>{con.title}</h5>
        </div>
        <div className='w-full max-w-xl lg:w-3/4'>
  
          <p className="mb-4 text-neutral-400">{con.cont} </p>
          
        </div>
       </div>
          )
        })}
      
      </div>
    </div>
  )
}

export default Contact