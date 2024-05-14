
import LeftSide from './LeftSide'
 import NewsDiv from './NewsDiv'
import Add from './RightSide/Add'
// import Banner from './RightSide/Banner'
 import Navbar from './RightSide/Navbar'
import NewsDiv2 from './RightSide/NewsDiv2'
import RightThird from './RightSide/RightThird'


//  import NewsDiv2 from './RightSide/NewsDiv2'
import NewsTabs from './RightSide/NewsTabs'

const Home = () => {
  return (
    <div>
      <div className='grid md:grid-cols-12 mx-10 gap-6 lg:grid-cols-12 grid-cols-1'>
       

        <div className='col-span-2 order-last md:order-first lg:order-first gap-3 '>
          <LeftSide />
          <div className=' '>
            <NewsDiv />
          </div>
        </div>


        <div className='col-span-10   '>

        <Navbar />
        <div className='grid grid-cols-8 gap-5 '>

          <div className='col-span-5'>
          <div>
                <div className='w-[95%] h-[250px] mt-5 bg-[#D9D9D9]'>

                </div>
                <h1 className="box-text1 md:block sm:text-center md:text-start text-sm md:text-xl lg:text-2xl mt-3">কায়রো থেকে মরুভূমিতে রাজধানী সরিয়ে নিচ্ছে মিসর</h1>
              </div>

          </div>
          <div className='col-span-3 mt-4 bg-[#D8D8D8]'>
        
         
<RightThird/>
 
          </div>
        

          </div>

          <Add />
          <div className='grid grid-cols-8 pt-4 pb-5'>
          <div className='col-span-5 gap-3'>
          <h1 className='font-bold text-3xl'>জাতীয়</h1>
          <div className=' border-black py-3 border-b-4'></div>
          <div className='flex flex-1 gap-3 mt-4'>
           
            <div>
            <div className='w-[100%] mb-3 h-[130px] bg-[#D9D9D9]'></div>
            <div className=' space-y-4' >
                      <h1 className=' text-xl font-bold'>দেশের ১৪ অঞ্চলে ৬০ কিমি.   বেগে ঝড়ো বৃষ্টির আভাস</h1>
                      <p className='text-[12px]'>দেশের ১৪ জেলার উপর দিয়ে সর্বোচ্চ ৬০ কিলোমিটার বেগে ঝড়ো হাওয়া বয়ে যাওয়ার পূর্বাভাস দিয়েছে <br /> আবহাওয়া অধিদপ্তর। মঙ্গলবার (১৯ মার্চ) ...</p>
                      <p className='text-[12px]'>দেশের ১৪ জেলার উপর দিয়ে সর্বোচ্চ ৬০ কিলোমিটার <br /> বেগে ঝড়ো হাওয়া বয়ে যাওয়ার পূর্বাভাস দিয়েছে <br /> আবহাওয়া অধিদপ্তর। মঙ্গলবার (১৯ মার্চ) ...</p>
                    </div>
            </div>

            
            <div className='w-[100%] mb-3 h-[165px] '>
              <NewsDiv2/>

            </div>
          </div>


            </div>

         
            <div className='col-span-3'>
              <NewsTabs />


            
            </div>


            </div>
          {/* 
          <div className='grid lg:grid-cols-8 md:grid-cols-4 grid-cols-1 mt-5 gap-6'>
            <div className='col-span-5 col-span-1 '>
              <div>
                <div className='
            w-6/7 h-[340px] bg-[#D9D9D9]'>

                </div>
                <h1 className="box-text1 md:block sm:text-center md:text-start text-sm md:text-xl lg:text-2xl mt-3">কায়রো থেকে মরুভূমিতে রাজধানী সরিয়ে নিচ্ছে মিসর</h1>
              </div>

            </div>
            <div className='col-span-3 col-span-2 w-full md:col-span-3 bg-[#D9D9D9]'>


              <div className='  flex flex-col gap-3 px-3 py-4'>
                <div className='flex gap-3'>
                  <div className='box'>

                  </div>
                  <h1 className="text-[12px] font-bold">কায়রো থেকে মরুভূমিতে রাজধানী সরিয়ে নিচ্ছে মিসর</h1>
                </div>

                <div className='flex gap-3'>
                  <div className='box'>

                  </div>
                  <h1 className="text-[12px] font-bold">কায়রো থেকে মরুভূমিতে রাজধানী সরিয়ে নিচ্ছে মিসর</h1>
                </div>



                <div className='flex gap-3'>
                  <div className='box'>

                  </div>
                  <h1 className="text-[12px] font-bold">কায়রো থেকে মরুভূমিতে রাজধানী সরিয়ে নিচ্ছে মিসর</h1>
                </div>
                <div className='flex gap-3'>
                  <div className='box'>

                  </div>
                  <h1 className="text-[12px] font-bold">কায়রো থেকে মরুভূমিতে রাজধানী সরিয়ে নিচ্ছে মিসর</h1>
                </div>
                <div className='flex gap-3'>
                  <div className='box'>

                  </div>
                  <h1 className="text-[12px] font-bold">কায়রো থেকে মরুভূমিতে রাজধানী সরিয়ে নিচ্ছে মিসর</h1>
                </div>

                <div className='flex gap-3'>
                  <div className='box'>

                  </div>
                  <h1 className="text-[12px] font-bold">কায়রো থেকে মরুভূমিতে রাজধানী সরিয়ে নিচ্ছে মিসর</h1>
                </div>

              </div>
            </div>
          </div>
        
          <Add />




          <div className='grid md:grid-cols-6 sm:grid-col-1 sm:mx-auto pt-4'>

            <div className='col-span-4 md:gap-3 hidden md:block lg:block'>
              <h1 className='f font-bold text-3xl'>জাতীয়</h1>
              <div className='b border-black py-3 border-b-4'>

              </div>
              <div className='grid lg:grid-cols-4  grid-cols-1 gap-3 mt-12 pt-3 pb-3'>
                <div className=' col-span-2'>

                  <div>
                    <div className='w-5/3 mb-3 h-[165px] bg-[#D9D9D9]'></div>
                    <div className=' space-y-4' >
                      <h1 className=' text-xl font-bold'>দেশের ১৪ অঞ্চলে ৬০ কিমি.   বেগে ঝড়ো বৃষ্টির আভাস</h1>
                      <p className='text-[11px]'>দেশের ১৪ জেলার উপর দিয়ে সর্বোচ্চ ৬০ কিলোমিটার বেগে ঝড়ো হাওয়া বয়ে যাওয়ার পূর্বাভাস দিয়েছে <br /> আবহাওয়া অধিদপ্তর। মঙ্গলবার (১৯ মার্চ) ...</p>
                      <p className='text-[11px]'>দেশের ১৪ জেলার উপর দিয়ে সর্বোচ্চ ৬০ কিলোমিটার <br /> বেগে ঝড়ো হাওয়া বয়ে যাওয়ার পূর্বাভাস দিয়েছে <br /> আবহাওয়া অধিদপ্তর। মঙ্গলবার (১৯ মার্চ) ...</p>
                    </div>
                  </div>
                </div>
                <div className=' col-span-2 '>
                  <NewsDiv2 />
                </div>
              </div>
            </div>

            <div className='col-span-2'>
              <NewsTabs />


            </div>
          </div> */}
        </div>
       

      </div>

    </div>
  )
}

export default Home
