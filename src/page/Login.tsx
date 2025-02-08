import { Fragment } from "react/jsx-runtime";
import { RiLockPasswordLine } from "react-icons/ri";


const Login = () => {
const handleSignin = (formData:FormData) => {
        const name= formData.get('email') as string;
        const password = formData.get('password') as string;
        console.log('name',name, 'password', password);
     
}
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-white">Simple Form</h1>
      <form action={handleSignin} className="block  p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 lg:w-3/6  md:w-4/6  w-5/6 ">
        <Fragment>
          <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
              </svg>
            </div>
            <input name="email" type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"/>
          </div>
        </Fragment>
        <Fragment>
          <label htmlFor="input-group-2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
               {/* <i className='fas fa-key text-red-400' style={{fontSize:'24px'}}></i> */}
               <RiLockPasswordLine className="text-red-400"  />
            </div>
            <input name="password" type="text" id="input-group-2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"/>
          </div>
        </Fragment>
        <button type='submit' className="focus:outline-none text-white dark:text-black bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">signin</button>
      </form>
    </div>

  )
}

export default Login