import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
 import { ToastContainer, toast } from 'react-toastify';
import Login from './components/Login'


 export const backend_url=import.meta.env.VITE_BACKEND_URL
 export const currency="₹"

const App = () => {

  const [token, setToken] = useState('dummytoken')
  return (
    <main>
      <ToastContainer />
{token === "" ? (
  <Login setToken={setToken}/>
):(
   <div className='bg-blue-900/40 text-gray-900 font-bold'>
        <div className='mx-auto  max-w-[1440px] flex flex-col sm:flex-row'>
          <Sidebar token={token} setToken={setToken}/>
          <Routes>
            <Route path='/' element={<Login token={token}/>}/>
             <Route path='/list' element={<List token={token}/>}/>
              <Route path='/orders' element={<Orders token={token}/>}/>
          </Routes>
        </div>
      </div>
)}
     
    </main>
  )
}

export default App