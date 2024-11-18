'use client'
import { useState } from "react";
import React from 'react';
// import PasswordStrengthMeter from "./PasswordStreagth";
import useCallApis from "./useCallApis";
import Link from "next/link";
// import "./styles/Signup.css"
// import { GoogleOAuthProvider } from "@react-oauth/google";

 const Page = ()=> {

  const [UserDetails, setUserDetails] = useState({
    name : '',
    email : '',
    password : ''
  })

  const {data,isloading,callapi} = useCallApis()

  const handleChangeInput = (e)=>{

    const { name, value } = e.target;
        console.log({name,value})
    // Update state with the new value for the specific input field
    setUserDetails(prev => ({
        ...prev,
        [name]: value
    }));
  }


  const submitForm = ()=>{
    const getStrength = (pass) => {
      let strength = 0;
      if (pass.length >= 6) strength++;
      if (pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strength++;
      if (pass.match(/\d/)) strength++;
      if (pass.match(/[^a-zA-Z\d]/)) strength++;
      return strength;
    };

    callapi(UserDetails,'signup')
  }
  return (

      <div className="SignupMainBox">
        <div className="SignupForm">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
       
          <h2 className="" style={{padding : '10px 0'}}>
            Sign in to your account
          </h2>
        </div>

        <div className="">
  
   <div className="SignupInputs">
   <input
      icon={""}
      type='text'
      name='name'
      placeholder="Full Name"
      value={UserDetails.name}
      onChange={handleChangeInput}
     />
     <input
      icon={""}
      type='email'
      name='email'
      placeholder="Email"
      value={UserDetails.email}
      onChange={handleChangeInput}
     />
     <input
      icon={""}
      type='password'
      name='password'
      placeholder="Password"
      value={UserDetails.password}
      onChange={handleChangeInput}
     />

   </div>
     <div>
      {/* <PasswordStrengthMeter password={UserDetails.password}/> */}
           </div>
            <div>
              <p>Already have a account <Link href={"/signin"}>signIn</Link></p>
            <button variant="contained" onClick={submitForm}>{isloading ? 'loading' : 'SingUp'}</button>
            </div>
              <button onClick={()=>{
                window.open(`http://localhost:8000/auth/google`,"_self")
              }}>Signup with google</button>
        </div>
        </div>
      </div>
 
  )
}


export default Page;