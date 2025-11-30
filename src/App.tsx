import  './index.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
const App = () => {
  


  return (
    <div className='flex flex-col items-center justify-center'>
      <main className='mt-5'>
        <Navbar/>
        <Hero />
      </main>
    </div>
  )
}

export default App
