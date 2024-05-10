import Header from '../components/Header'
import Home from '../components/Home/Home'

const MainLayout = () => {
  return (
    <div>
        <Header/>
        <div className='md:w-[100%] md:pl-7 lg:pl-6'>
        <Home/>

        </div>
    </div>
  )
}

export default MainLayout
