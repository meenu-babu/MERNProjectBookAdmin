import React from 'react'
import loginImg from "../assets/login.webp"
import { backend_url } from '../App'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = ({setToken}) => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const onSubmitHandler=async(e)=>{
  try {
    
  } catch (error) {
    
  }
}

  return (
    <section className='absolute top-0 left-0 h-full w-full z-50 bg-white'>
      {/* container */}
      <div className='flex h-full w-full'>
        {/* image right side */}
        <div className='w-1/2 hidden sm:block'>
          <img src={loginImg} alt='' className='object-cover h-full w-full'/>
        </div>
        {/* form side */}
        <div className='flex items-center justify-center w-full sm:w-1/2'>
          <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-md m-auto gap-y-5 text-gray-800'>
            <div className='w-full mb-4'>
              <h3 className='text-[36px] font-[700] leading-[120%]'>Login</h3>
            </div>
            <div className='w-full'>
              <label htmlFor='email'className='text-[15px] font-[500]'>Email</label>
              <input type='email' placeholder='Email' className='w-full px-3 py-1 ring-1 ring-slate-900/10 rounded bg-primary mt-1'/>
            </div>
            <div>
              <label htmlFor='password' className='text-[15px] font-[500]'>Password</label>
              <input type='password' placeholder='Password' className='w-full px-3 py-1 ring-1 ring-slate-900/10 rounded bg-primary mt-1'/>

            </div>
            <button type='submit' className='btn-dark w-full mt-5 !py-[7px] !rounded'>Login</button>

          </form>
        </div>
      </div>

    </section>
  )
}

export default Login