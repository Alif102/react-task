
const NewsDiv = () => {
  return (
    <div>
        <div>
              <div className='w-[100%] h-auto space-y-4  py-3 pt-7 pr-1 rounded-sm mt-6 flex flex-col shadow-lg p-2'>
                {/* <div className='flex flex-row justify-center items-center gap-1'>
                  <div className='news-box'>

                  </div>
                  <h1 className="text-[10px] font-bold">কায়রো থেকে মরুভূমিতে রাজধানী সরিয়ে নিচ্ছে মিসর</h1>
                </div>

               
                
                
               

                <div className='flex justify-center  items-center gap-1'>
                  <div className='news-box'>

                  </div>
                  <h1 className="text-[10px] font-bold">কায়রো থেকে মরুভূমিতে রাজধানী সরিয়ে নিচ্ছে মিসর</h1>
                </div>

                <div className='flex justify-center  items-center gap-1'>
                  <div className='news-box'>

                  </div>
                  <h1 className="text-[10px] font-bold">কায়রো থেকে মরুভূমিতে রাজধানী সরিয়ে নিচ্ছে মিসর</h1>
                </div> */}

                <h1 className="font-bold text-2xl mb-3 text-center">
                Hot Topics
                </h1>
                <div className="flex cursor-pointer  flex-col space-y-4">
                <div className="flex justify-around hover:text-violet-600 items-center">
                <a >প্রচ্ছদ</a>
                <h1 className="border px-2 rounded-full  ">17</h1>
                </div>
                <div className="flex justify-around hover:text-violet-600 items-center">
                <a >বিদেশ</a>
                <h1 className="border px-2 rounded-full  ">13</h1>
                </div>
                <div className="flex justify-around hover:text-violet-600 items-center">
                <a >বিনোদন</a>
                <h1 className="border px-2 rounded-full  ">7</h1>
                </div>
                <div className="flex justify-around hover:text-violet-600 items-center">
                <a >স্বাস্থ্য</a>
                <h1 className="border px-2 rounded-full  ">23</h1>
                </div>
                <div className="flex justify-around hover:text-violet-600 items-center">
                <a >খেলা</a>
                <h1 className="border px-2 rounded-full  ">27</h1>
                </div>
			
                </div>

              </div>
            </div>
    </div>
  )
}

export default NewsDiv