import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { FaListAlt } from 'react-icons/fa'
import { FaSquarePlus } from 'react-icons/fa6'
import { MdFactCheck } from 'react-icons/md'
import { NavLink, Link } from 'react-router-dom'
import logo from "../assets/logo.png"



const Sidebar = () => {
  return (

    <div className='w-full sm:w-1/5 min-h-screen bg-white rounded pb-3 flex flex-col items-center'>
      <Link to='/' className='text-2xl font-bold flex items-center sm:pl-6 pt-6'>
        <img src={logo} alt='Logo' width={64} height={64} />
        <span className='pl-2 hidden lg:flex'>Bookkart</span>
      </Link>

      <div className='flex sm:flex-col gap-5 pt-10 w-full items-center'>

        <NavLink
          to="/"
          className={({ isActive }) =>
            `w-full flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium
     ${isActive ? " bg-blue-100 text-blue-600" : " text-gray-600 hover:bg-gray-200"}`
          }
        >
          <FaSquarePlus />
          <span className="hidden lg:inline">Add Item</span>
        </NavLink>


        <NavLink
          to="/list"
          className={({ isActive }) =>
            `w-full flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium
     ${isActive ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-200"}`
          }
        >
          <FaListAlt />
          <span className="hidden lg:inline">List</span>
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `w-full flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium
     ${isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-200'}`
          }
        >
          <MdFactCheck />
          <span className="hidden lg:inline">Orders</span>
        </NavLink>


        {/* logout button */}
        <div className='w-full '>
          <button className='w-full  flex items-center gap-2 px-4 py-2 text-[14px] font-[500] cursor-pointer h-10 rounded-xl bg-amber-700/20 hover:bg-amber-700/80'>
            <BiLogOut  />
            <div className='hidden lg:flex'>Logout</div>
          </button>
        </div>
      </div>
    </div>

  )
}

export default Sidebar