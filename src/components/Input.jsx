import React from 'react'

export default function Input({input}) {
  return (
    <div className='w-84.5 bg-gray-800 h-16 px-4 py-2 mb-3 flex justify-end items-center border-none'>
    <p className='text-white text-2xl tracking-wider'>{input}</p>
    </div>
  )
}
