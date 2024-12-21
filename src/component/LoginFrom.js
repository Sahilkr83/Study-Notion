import React from 'react'
import {useState} from 'react'
import {  Link, useNavigate } from 'react-router-dom'
import { IoEye,IoEyeOff } from "react-icons/io5";
import toast from 'react-hot-toast';


const LoginFrom = ({setUserLogin}) => {

    const navigate = useNavigate();
    

    const [formData , setFormData] = useState ( {
        email:"",password:""
    })

    const [showPassword , setShowPassword] = useState(false)

    function ChangeHandler(event){

        setFormData( prevData => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))

    }
    function SubmitHandler(event){
        event.preventDefault();
        setUserLogin(true)
        toast.success("Logged In")
        navigate("/dashboard")
    }
    console.log(formData.email)
  return (
    <form className='flex flex-col w-full gap-y-4 mt-6' onSubmit={SubmitHandler}>

        <label>
            <p className='lable '>
                Email Address <sup className='text-red-500'>*</sup>
            </p>
            <input 
                className='input'
                required
                type='email'
                value ={formData.email} 
                placeholder='Enter your email address'
                name='email'
                onChange={ChangeHandler}/>
        </label>

      <label className='relative'>
            <p className='lable '>
                Password <sup className='text-red-500'>*</sup>
            </p>

            <input 
                className='input'
                required
                type={showPassword ? ("text") :("password")}
                value ={formData.password} 
                placeholder='Enter Password'
                name='password'
                onChange={ChangeHandler}
                />
            <span className='right-0 text-xl top-[52px] absolute' onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (<IoEye />) : (<IoEyeOff/>) }
            </span>

            <Link className='no-underline  text-xs text-[#2f8383] absolute right-0 ' to="#">
                 <p>
                    Forgot Password 
                 </p>
            </Link>
        </label>

        <button className='mt-8 bg-yellow-400 rounded-[8px] font-medium text-black px-[12px] py-[8px] text-center' >
            Sign In
        </button>

    </form>
  )
}

export default LoginFrom;