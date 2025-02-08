import Login from './page/Login.js'
import './App.css'
import ThemeButton from './component/ThemeButton.js'
import Register from './page/Register.js'


function App() {
 

  return (
    <>
      <div className='w-screen h-screen bg-white dark:bg-black'>
       <ThemeButton />
       {/* <Login /> */}
       <Register />
      </div>
    </>
  )
}

export default App
