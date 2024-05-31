import React from 'react'
import { useEffect } from 'react'
import { atom } from 'nanostores'

const InputRange = ({nama,nilai}) => {

    const rating = atom(nilai)
    rating.listen((value) => {
        const span = document.querySelector(`span`)
        span.textContent = value
    })

    
  return (
    <div className='flex gap-5  justify-start items-center'>
        <h1>Rating</h1>
        <input name={nama} type="range" min="1" max="10" step="1" onChange={
            (e) => {
                rating.set(e.target.value)
            }

            
        } />
        <span  className='text-xl'></span>
    </div>
  )
}

export default InputRange