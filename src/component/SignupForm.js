import React from 'react'
import {useState} from 'react'
import {  useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import { IoEye,IoEyeOff } from "react-icons/io5";

const SignupForm = ({setUserLogin}) => {
    
    const [formData , setFormData] = useState ( {
        firstName:"",
        lastname:"",
        email:"",
        password:"",
        confirmpassword:""
    })

    const [showPassword , setShowPassword] = useState(false)
    const [showPassword2 , setShowPassword2] = useState(false)

    function ChangeHandler(event){

        setFormData( prevData => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))

    }

    const navigate = useNavigate();

    function SubmitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmpassword){
            toast.error("Password Don't Match")
            return;
        }
        setUserLogin(true)
        toast.success("Account Created")
        navigate("/dashboard")
    }
  return (
    

    <div>

        <div>
            <button>
                Student
            </button>

            <button>
                Instructor
            </button>
        </div>

        <form onSubmit={SubmitHandler}>

            <div className='flex gap-16 w-full signup-gap-div'>
                <label>
                <p className='lable '>
                    First Name <sup className='text-red-500'>*</sup>
                </p>
                <input 
                    className='input'
                    required
                    type='text'
                    value ={formData.firstName} 
                    placeholder='Enter First Name'
                    name='firstName'
                    onChange={ChangeHandler}/>
                </label>

                <label>
                    <p className='lable '>
                        Last Name <sup className='text-red-500'>*</sup>
                    </p>
                    <input 
                        className='input'
                        required
                        type='text'
                        value ={formData.lastname} 
                        placeholder='Enter Last Name'
                        name='lastname'
                        onChange={ChangeHandler}/>
                </label>

            </div>

            <label>
                <p className='lable '>
                    Email Address <sup className='text-red-500'>*</sup>
                </p>
                <input 
                    className='input'
                    required
                    type='email'
                    value ={formData.email} 
                    placeholder='Enter Email ID'
                    name='email'
                    onChange={ChangeHandler}/>
            </label>

            <div className='flex gap-16 signup-gap-div'>
            <label className='relative'>
                    <p className='lable '>
                        Create Password <sup className='text-red-500'>*</sup>
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
                    <span  className='right-0 text-xl top-[52px] absolute' onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<IoEye />) : (<IoEyeOff/>) }
                    </span>

                </label>

                <label className='relative'>
                    <p className='lable '>
                        Confirm Password <sup className='text-red-500'>*</sup>
                    </p>

                    <input 
                        className='input'
                        required
                        type={showPassword2 ? ("text") :("password")}
                        value ={formData.confirmpassword} 
                        placeholder='Confirm Password'
                        name='confirmpassword'
                        onChange={ChangeHandler}
                        />
                    <span  className='right-0 text-xl top-[52px] absolute' onClick={() => setShowPassword2((prev) => !prev)}>
                         {showPassword2 ? (<IoEye />) : (<IoEyeOff/>) }
                    </span>

                </label>
            </div>

        <button className='mt-8 bg-yellow-400 rounded-[8px] w-full font-bold text-black px-[12px] py-[8px] text-center'>
            Create Account
        </button>

    </form>
    </div>
  )
}

export default SignupForm;