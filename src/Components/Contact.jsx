import React from 'react'
import {CONTACT} from "../constants"

function Contact() {
  return (
    < div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center font-semibold bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent ">Contact</h1>
      <div className='mb-1'>
        {CONTACT.map((con, index)=>{
          return (
          <div key={index} className='flex flex-wrap  justify-evenly'>
              {con.email}
              {con.phoneNo}
              {con.address}
          </div>
          )
        })}
      
      </div>
    </div>
  )
}

export default Contact