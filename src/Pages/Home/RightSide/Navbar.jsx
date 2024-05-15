

import logo from '../../../assets/Images/news_logo.png'

const Navbar = () => {
  return (
    <div className="">
     
      <div className="navbar border-b border-l w-[93%] mx-auto bg-base-100">
        <div className="navbar-start">
         
          <a className="">
            <img className='h-[50px] w-[70%] rounded-md' src={logo} alt="logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu  menu-horizontal px-1">
            <li><a>প্রচ্ছদ</a></li>

            <li><a>বিদেশ</a></li>
            <li><a>খেলা</a></li>
            <li><a>বিনোদন</a></li>
            <li><a>প্রবাস</a></li>
            <li><a>স্বাস্থ্য</a></li>
            <li ><a>বিচিত্রিতা</a></li>
            <li ><a>ধর্ম</a></li>
            <li ><a>সুসংবাদ</a></li>
            <li ><a>অন্যান্য...</a></li>
          </ul>
        </div>
        <div className="navbar-end ml-6 ">
        <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            {/* <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 z-[1] pt-2 shadow bg-base-100 rounded-box w-52">
              <li ><a>প্রচ্ছদ</a></li>

              <li><a>বিদেশ</a></li>
              <li><a>খেলা</a></li>
              <li><a>বিনোদন</a></li>
              <li><a>প্রবাস</a></li>
              <li><a>স্বাস্থ্য</a></li>
              <li><a>বিচিত্রিতা</a></li>

              <li ><a>ধর্ম</a></li>
              <li ><a>সুসংবাদ</a></li>
              <li ><a>অন্যান্য...</a></li>
            </ul> */}
           <div className=' '>
           <ul tabIndex={0} className="menu  menu-sm bg-base-100 z-[1] pt-2 rounded-box dropdown-content">
            <li ><a>প্রচ্ছদ</a></li>
            <li><a>বিদেশ</a></li>
              <li><a>খেলা</a></li>
              <li><a>বিনোদন</a></li>
              <li><a>প্রবাস</a></li>
              <li><a>স্বাস্থ্য</a></li>
              <li><a>বিচিত্রিতা</a></li>

              <li ><a>ধর্ম</a></li>
              <li ><a>সুসংবাদ</a></li>
              <li ><a>অন্যান্য...</a></li>
            </ul>
           </div>
          </div>
  </div>
      </div>
    </div>
  )
}

export default Navbar
