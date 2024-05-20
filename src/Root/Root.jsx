import { Outlet } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Footer from "../Layout/Footer/Footer"
import Navbar from "../Layout/Navbar/Navbar"

const Root = () => {
  return (
    <div>
      <Toaster/>

     <div className="container mx-auto">
     <Navbar/>
    

     </div>
       
        <Outlet></Outlet>

        <div className="container mx-auto">
     <Footer/>

     </div>
        
    </div>
  )
}

export default Root