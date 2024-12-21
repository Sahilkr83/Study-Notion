import React from 'react'
import {  NavLink } from 'react-router-dom'
import logo from "../assets/Logo.svg"
import toast from 'react-hot-toast'

const NavBar = ({isUserLogin,setUserLogin}) => {
  return (
    <div className='navbar flex justify-evenly items-center  w-11/12 max-w-[1160px] py-4 mx-auto '>

        <NavLink to ="/">
             <img src={logo} id='logo' alt='Logo' width={160} height={32} loading='lazy' />
        </NavLink>

        <nav className='nav flex gap-6 '>

            <NavLink className="navlink text-white no-underline  opacity-60" to="/"> Home </NavLink>
              
            <NavLink className="navlink text-white no-underline  opacity-60"  to="/about"> About </NavLink>
             
            <NavLink className="navlink text-white no-underline  opacity-60"  to="/contact"> contact </NavLink>
     
        </nav>

        <div className='btndiv flex mx-3 gap-4'>
            { !isUserLogin &&
                <NavLink to="/login">
                    <button className='btn'>
                        Login
                    </button>
                </NavLink>
            }
            {   !isUserLogin &&
                <NavLink to="/signup">
                    <button className='btn text-nowrap'>
                        Sign up
                    </button>
                </NavLink>
            }
            {  isUserLogin &&
                <NavLink to="/" >
                    <button className='btn text-nowrap' onClick={() =>{ 
                        setUserLogin(false)
                        toast.success("Logged Out")
                    }}>
                        Log Out
                    </button>
                </NavLink>
            }
             { isUserLogin &&
                <NavLink className='btn' to="/dashboard">
                    <button>
                        Dashboard
                    </button>
                </NavLink>
            }
        </div>
    </div>
  )
}

export default NavBar