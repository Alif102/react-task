import React from 'react'
import Leftside from './Leftside/Leftside'
import Navbar from '../Home/RightSide/Navbar'
import Add from '../Home/RightSide/Add'

const SecondHomePage = () => {
  return (
    <div>
       <div className='grid md:grid-cols-12 md:mx-10 mx-2 gap-6 lg:grid-cols-12 grid-cols-1'>
        

            <div className='col-span-2'>
            <Leftside/>
            <Leftside/>
            </div>

            <div className='col-span-8'>
                <Navbar/>
                <Add/>
                <h1 className="box-text1 md:block sm:text-center md:text-start my-2 text-sm md:text-xl lg:text-2xl mt-3">কায়রো থেকে মরুভূমিতে রাজধানী <br/> সরিয়ে নিচ্ছে মিসর</h1>

                <div className="flex items-center justify-center my-3 w-[50%] h-[250px]  font-bold bg-[#D9D9D9]">ADD</div>

            </div>
        
       </div>
    </div>
  )
}

export default SecondHomePage
