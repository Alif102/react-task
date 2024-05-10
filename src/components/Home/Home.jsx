// import React from 'react'
// import LeftSide from './LeftSide'
import NewsDiv from './NewsDiv'
import Banner from './RightSide/Banner'
import Navbar from './RightSide/Navbar'
import NewsDiv2 from './RightSide/NewsDiv2'
import NewsTabs from './RightSide/NewsTabs'

const Home = () => {
  return (
    <div>
      <div className='grid grid-cols-12 gap-3'>
        <div className='col-span-2'>
          <div className=' flex flex-col items-center text-center justify-center w-[255ppx] h-[758px] bg-white shadow-lg'>
            <div className=" w-[225px] h-[92px]  bg-[#D9D9D9]"></div>
            <div className="flex items-center justify-center w-[156px] h-[602px] mt-5 font-bold bg-[#D9D9D9]">ADD</div>

          </div>
          <NewsDiv />
        </div>


        <div className='col-span-10 md:pl-9 '>

          <Navbar />

          <div className='md:w-[1050px] '>
            <div className=''>
              <Banner />

            </div>
            <div className=''>


              <div className="md:bg-gray-300  md:h-[105px] md:flex md:justify-center md:items-center md:mt-5 ">
                <span className="text-black font-bold">ADD</span>
              </div>
            </div>

            <div className='grid grid-cols-7 pt-4'>

              <div className='c col-span-5 '>
                <h1 className='f font-bold text-3xl'>জাতীয়</h1>
                <div className='b border-black py-3 border-b-4'></div>
                <div className='grid grid-cols-4 pt-3 pb-3'>
                  <div className=' col-span-2 pl-3'>
                    <div>
                      <div className='w-[330px] mb-3 h-[185px] bg-[#D9D9D9]'></div>
                      <div className=' space-y-4' >
                        <h1 className=' text-xl font-bold'>দেশের ১৪ অঞ্চলে ৬০ কিমি. <br /> বেগে ঝড়ো বৃষ্টির আভাস</h1>
                        <p>দেশের ১৪ জেলার উপর দিয়ে সর্বোচ্চ ৬০ কিলোমিটার <br /> বেগে ঝড়ো হাওয়া বয়ে যাওয়ার পূর্বাভাস দিয়েছে <br /> আবহাওয়া অধিদপ্তর। মঙ্গলবার (১৯ মার্চ) ...</p>
                        <p>দেশের ১৪ জেলার উপর দিয়ে সর্বোচ্চ ৬০ কিলোমিটার <br /> বেগে ঝড়ো হাওয়া বয়ে যাওয়ার পূর্বাভাস দিয়েছে <br /> আবহাওয়া অধিদপ্তর। মঙ্গলবার (১৯ মার্চ) ...</p>
                      </div>
                    </div>
                  </div>
                  <div className=' col-span-2 '>
                    <NewsDiv2 />
                  </div>
                </div>
              </div>

              <div className='col-span-2'>
               <NewsTabs/>


              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
