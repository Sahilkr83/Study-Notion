
import frame from "../assets/frame.png"
import SignupForm from "./SignupForm"
import LoginFrom from "./LoginFrom"
import { FcGoogle } from "react-icons/fc"

const Template = ({title ,desc1,desc2,image,formType,setUserLogin}) => {
  return (
    <div className="template text-white  flex w-11/12 max-w-[1160px] py-12 mx-auto justify-between gap-y-0">
        <div className="form  w-[450px] mx-0 md:items-starr items-center flex flex-col">
            <h1 className="font-semibold text-[1.875rem] leading-[2.375] title">
                {title}
            </h1>

            <p className="text-[1.13rem] leading-[1.625rem] mt-4">
                <span className="text-[#6c717b]">{desc1}</span> <br/>
                <span className="text-[#2f8383] italic">{desc2}</span>
            </p>

            { formType ==="signup" ? 
            (<SignupForm setUserLogin ={setUserLogin}/>):
            (<LoginFrom setUserLogin ={setUserLogin}/>)}

            <div className="flex  w-full items-center my-4 gap-x-2">
                <div className="h-[1px] w-full bg-[#161b27]"></div>
                <p className="opacity-60"> OR</p>
                <div className="h-[1px] w-full bg-[#161b27]"></div>
            </div>

            <button className="flex w-full justify-center items-center rounded-[8px] font-medium border-[1px] px-[12px] py-[8px] gap-x-2 mt-6 border-solid border-[#161b27]">
            <FcGoogle />
                <p>Sign Up with Google</p>
            </button>


        </div>

        <div className="img-section relative  ">
           
         <img id="bg-img" src={frame} alt='frame '
                width={500}
                height={504}
                loading='lazy'/>
         <img id="front-img" src={image} alt='pic'
                width={500}
                height={490}
                loading='lazy'
                className= " absolute -top-4 -left-4"/>
        </div>

    </div>
  )
}

export default Template;