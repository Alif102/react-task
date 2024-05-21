// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../../assets/Images/news_logo.png'
// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="bg-gray-200 p-3">
//       <nav className="flex justify-between w-[90%] items-center mx-auto">
//         <div>
//           <img className='h-[50px] w-[70%] rounded-md' src={logo} alt="logo" />
//           {/* <img className="w-16 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="..." /> */}
//         </div>
//         <div className={`nav-links duration-500 md:static absolute  md:min-h-fit min-h-[60vh]
//                  left-0 ${isMenuOpen ? 'top-[9%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5`}>
//           <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            
//           </ul>
//         </div>
//         <div className="flex items-center gap-6">
//           {/* <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign in</button> */}
//           <div className="md:hidden">
//             {isMenuOpen ? (
//               <FaTimes onClick={toggleMenu} className="text-3xl cursor-pointer" />
//             ) : (
//               <FaBars onClick={toggleMenu} className="text-3xl cursor-pointer" />
//             )}
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gray-200 w-[93%] mx-auto">
          
            <nav className="flex justify-between items-center py-3 px-2 mx-auto   ">
                <div>
                <img className='h-[50px] w-[70%] rounded-md' src={logo} alt="logo" />
                    {/* <img className="w-16 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="..." /> */}
                </div>
                <div className={`nav-links duration-1000 
                md:static absolute bg-gray-200 md:min-h-fit
                 min-h-[60vh] right-2 ${isMenuOpen ? 'top-[9%] transition-transform ease-in ease-out' : 'top-[-100%]'} md:w-auto
                  w-1/2 flex justify-center  items-center px-5`}>
                    <ul className="flex  md:flex-row flex-col md:items-center md:gap-5 gap-3">
                        {/* <li>
                            <a className="hover:text-gray-500" href="#">Products</a>
                        </li> */}
                       
           <li><a className="hover:text-purple-500" href="#" >প্রচ্ছদ</a></li>

            <li><a className="hover:text-purple-500" href="#">বিদেশ</a></li>
            <li><a className="hover:text-purple-500" href="#">বিনোদন</a></li>
            <li><a className="hover:text-purple-500" href="#">খেলা</a></li>
            <li><a className="hover:text-purple-500" href="#">প্রবাস</a></li>
            <li><a className="hover:text-purple-500" href="#">স্বাস্থ্য</a></li>
            <li>	<a className="hover:text-purple-500" href="#">সুসংবাদ</a></li>
            <li>	<a className="hover:text-purple-500" href="#">অন্যান্য...</a></li>
                    </ul>
                </div>
                <div className="flex items-center gap-6">
                    {/* <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign in</button> */}
                    <div className="md:hidden">
                        {/* {isMenuOpen ? (
                            <FaTimes onClick={toggleMenu} className="text-3xl cursor-pointer" />
                        ) : (
                            <FaBars onClick={toggleMenu} className="text-3xl cursor-pointer" />
                        )} */}
                        {isMenuOpen ? (
                            <FaTimes onClick={toggleMenu} className="text-3xl cursor-pointer transition-opacity duration-300 opacity-100 hover:opacity-70" />
                        ) : (
                            <FaBars onClick={toggleMenu} className="text-3xl cursor-pointer transition-opacity duration-300 opacity-100 hover:opacity-70" />
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

