import Login from './component/Login.js'
import './App.css'
import ThemeButton from './component/ThemeButton.js'


function App() {
 

  return (
    <>
      <div className='w-screen h-screen bg-white dark:bg-black'>
       <ThemeButton />
       <Login />
      </div>
    </>
  )
}

export default App
