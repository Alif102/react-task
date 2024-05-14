import car1 from '../../assets/Images/car1.jpg'
const LeftSide = () => {
  return (

    <div className='mt-5'>
      <div className=" w-[100%]  h-[40px] mt-4 rounded-md pt-5 pb-5 shadow-md  flex items-center justify-center">
      <img src={car1} alt="car" />
      </div>
    <div className=' flex justify-center items-center text-center mt-9
     w-[100%] md:h-[400px]
     bg-white shadow-lg'>
           
            <div className="flex items-center justify-center w-[60%] h-[80%] mt-5 font-bold bg-[#D9D9D9]">ADD</div>

          </div>
    </div>
  )
}

export default LeftSide
