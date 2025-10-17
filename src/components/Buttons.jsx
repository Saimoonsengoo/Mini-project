import React from 'react'

export default function Buttons({clickEventHandling}) {
  return (
    <div className='w-84 bg-amber-50 h-100 grid grid-rows-6 gap-2 p-2'>
      <div className='grid grid-cols-4 gap-2'>
        <button className='w-20 text-black hover:text-white hover:bg-gray-800' onClick={(e) => clickEventHandling(e.target.innerText)}>C</button>
        <button className='w-20 text-black hover:text-white hover:bg-gray-800' onClick={(e) => clickEventHandling(e.target.innerText)}>(</button>
        <button className='w-20 text-black hover:text-white hover:bg-gray-800' onClick={(e) => clickEventHandling(e.target.innerText)}>)</button>
        <button className='w-20 text-black hover:text-white hover:bg-gray-800' onClick={(e) => clickEventHandling(e.target.innerText)}>Back</button>
      </div>

      <div className='grid grid-cols-4 gap-2'>
        <button className='w-20 text-black hover:text-white hover:bg-gray-800' onClick={(e) => clickEventHandling(e.target.innerText)}>7</button>
        <button className='w-20 text-black hover:text-white hover:bg-gray-800' onClick={(e) => clickEventHandling(e.target.innerText)}>8</button>
        <button className='w-20 text-black hover:text-white hover:bg-gray-800' onClick={(e) => clickEventHandling(e.target.innerText)}>9</button>
        <button className='w-20 text-black hover:text-white hover:bg-gray-800' onClick={(e) => clickEventHandling(e.target.innerText)}>+</button>
      </div>

      <div className='grid grid-cols-4 gap-2'>
        <button className='w-20 text-black hover:text-white hover:bg-gray-800' onClick={(e) => clickEventHandling(e.target.innerText)}>4</button>
        <button className='w-20 text-black hover:text-white hover:bg-gray-800' onClick={(e) => clickEventHandling(e.target.innerText)}>5</button>
        <button className='w-20 text-black hover:text-white hover:bg-gray-800' onClick={(e) => clickEventHandling(e.target.innerText)}>6</button>
        <button className='w-20 text-black hover:text-white hover:bg-gray-800' onClick={(e) => clickEventHandling(e.target.innerText)}>-</button>
      </div>

      <div className='grid grid-cols-4 gap-2'>
        <button className='w-20 text-black hover:text-white hover:bg-gray-800' onClick={(e) => clickEventHandling(e.target.innerText)}>1</button>
        <button className='w-20 text-black hover:text-white hover:bg-gray-800' onClick={(e) => clickEventHandling(e.target.innerText)}>2</button>
        <button className='w-20 text-black hover:text-white hover:bg-gray-800' onClick={(e) => clickEventHandling(e.target.innerText)}>3</button>
        <button className='w-20 text-black hover:text-white hover:bg-gray-800' onClick={(e) => clickEventHandling(e.target.innerText)}>*</button>
      </div>

      <div className='grid grid-cols-4 gap-2'>
        <button className='w-20 text-black hover:text-white hover:bg-gray-800' onClick={(e) => clickEventHandling(e.target.innerText)}>.</button>
        <button className='w-20 text-black hover:text-white hover:bg-gray-800' onClick={(e) => clickEventHandling(e.target.innerText)}>0</button>
        <button className='w-20 text-black hover:text-white hover:bg-gray-800' onClick={(e) => clickEventHandling(e.target.innerText)}>00</button>
        <button className='w-20 text-black hover:text-white hover:bg-gray-800' onClick={(e) => clickEventHandling(e.target.innerText)}>/</button>
      </div>

      <div className='grid grid-cols-4 gap-2'>
        <button className=' col-span-3 text-black hover:text-white hover:bg-gray-800' onClick={(e) => clickEventHandling(e.target.innerText)}> Clear All </button>
        <button className=' text-black hover:text-white hover:bg-gray-800' onClick={(e) => clickEventHandling(e.target.innerText)}> = </button>
      </div>
    </div>
  )
}
