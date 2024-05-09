import React from 'react'
import Header from '../components/Header'
import Home from '../components/Home/Home'

const MainLayout = () => {
  return (
    <div>
        <Header/>
        <div className='w-[100%] mx-auto'>
        <Home/>

        </div>

    </div>
  )
}

export default MainLayout
