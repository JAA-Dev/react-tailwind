import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='dark'>
        <div className='top-0 sticky bg-gray-700 w-full border-2 border-violet-600 rounded-md p-6'>
            <h3 className='text-white font-bold text-[20px]'>JAA<span className='text-blue-700'>Dev</span></h3>
        </div> 
        <div className='bg-violet-200 h-10 w-full border-2 border-violet-600 rounded-md p-[350px] flex justify-center items-center'>
          <h1 className='text-4xl font-bold underline uppercase text-center text-gray-500'>Hello World</h1>
        </div> 
        <div className=''>
            {/* <button>Justify-end</button> */}
        </div>
        <div className='flex flex-col items-center justify-center space-y-6 mt-2'>
            <div className='h-16 w-16 rounded-full bg-blue-500'></div>
            <div className='h-16 w-16 rounded-full bg-red-500'></div>
            <div className='h-16 w-16 rounded-full bg-gray-500'></div>
        </div>
        <div className='grid grid-cols-3 gap-2 mt-2 mx-2 '>
            <div className='h-16 rounded-full bg-blue-500 drop-shadow-lg'></div>
            <div className='h-16 rounded-full bg-red-500 drop-shadow-lg'></div>
            <div className='h-16 rounded-full bg-gray-500 drop-shadow-lg'></div>
            <div className='h-16 rounded-full bg-yellow-500 drop-shadow-lg'></div>
        </div>
        <div className='md:block hidden'>
          <p>I appear on Screen wider than 768px</p>
        </div>
        <div className='responsive-color' >
          <p className='sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
           2xl:text-6xl text-chestnut'>I appear on Screen wider than 768px</p>
        </div>

        <div className='flex-center'>
            <h1>Flext center using Utility</h1>
        </div>
      </div>
    </>
  )
}

export default App
