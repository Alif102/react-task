import React from 'react'
import LeftSide from './LeftSide'
import Navbar from './RightSide/Navbar'

const Home = () => {
  return (
    <div>
      <div className='grid grid-cols-10 gap-3'>

        <div className='col-span-2 flex flex-col items-center text-center justify-center w-[255ppx] h-[758px] bg-white shadow-lg'>
        <div className=" w-[225px] h-[92px]  bg-[#D9D9D9]"></div>
      <div className="flex items-center justify-center w-[156px] h-[602px] mt-5 bg-[#D9D9D9]">ADD</div>
        </div>

        <div className='col-span-8 bg-gray-200'>
            <Navbar/>

           
            
        </div>

      </div>
    </div>
  )
}

export default Home
