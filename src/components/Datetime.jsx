import React from 'react'
import { useState,useEffect } from 'react'

const Datetime = () => {
    const [date, setDate] = useState(new Date());
    

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000)

        return function cleanup() {
            clearInterval(timer)
        }
    }
    )
return (
    <div className='flex gap-2 border border-black bg-white p-2 py-1 text-sm text-gray-400 rounded-full'>
        

            <h3>Hari {date.toLocaleDateString('id-ID', { weekday: 'long' })};</h3>
            <h2>Tanggal {date.toLocaleDateString()};</h2>
            <h1>Waktu {date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}</h1>
    </div>
)
}

export default Datetime