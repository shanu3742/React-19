"use client"
import { useEffect, useState } from 'react'

const ThemeButton = () => {
    const [theme ,setTheme] = useState('Light');

    useEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme.toLowerCase());
    },[theme])
  return (
    <div className='fixed right-5 top-5'>
    <label className="inline-flex items-center mb-5 cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" checked ={theme==='Dark'} onChange={() => {
        if(theme==='Light'){
          setTheme('Dark')
        }else{
          setTheme('Light')
        }
      }}  />
      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
      <span className="ms-3 text-sm  text-gray-900 dark:text-gray-300 font-extrabold">{theme}</span>
    </label>
 </div>
  )
}

export default ThemeButton