'use client'
import { useState } from "react";
import React from 'react';
// import PasswordStrengthMeter from "./PasswordStreagth";
import useCallApis from "./hooks/useApiCalling";
import Link from "next/link";
// import "./styles/Signup.css"
// import { GoogleOAuthProvider } from "@react-oauth/google";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { TextField } from "@mui/material";
import PasswordStrengthMete from "./PasswordStrength";
import Swal from 'sweetalert2'
import CheckValidForm from "./hooks/CheckValidForm";
 const Page = ()=> {

  const [UserDetails, setUserDetails] = useState({
    name : '',
    email : '',
    password : ''
  })

  const {data,isloading,callapi} = useCallApis()
console.log({data})
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

    const istrue =  CheckValidForm(UserDetails.name,UserDetails.email,UserDetails.password)
    if(istrue){
      callapi(UserDetails,'signup')
    }
    
  }

  return (

      <div className="SignupMainBox" style={{width : '100%', height : '100vh',
       overflow : "hidden", display : 'flex', justifyContent: "center", alignItems : 'center'}}>
     <Box component="section" sx={{
          width: 500,
          height: 300,
          borderRadius: 1,
        }}>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
       
          <h2 className="" style={{padding : '10px 0'}}>
            Sign in to your account
          </h2>
        </div>

        <div className="">
  
        <FormControl variant="standard" style={{
              width: "100%",
              padding: "10px",
              gap: "18px"
        }}>

<TextField id="filled-basic" type="text" name='name' label="Full Name" variant="filled" value={UserDetails.name}
      onChange={handleChangeInput}/>
<TextField id="filled-basic" type="email" name='email' label="email" variant="filled" value={UserDetails.email}
      onChange={handleChangeInput}/>

<TextField id="filled-basic" type="password" name='password' label="password" variant="filled" value={UserDetails.password}
      onChange={handleChangeInput}/>


   </FormControl>
     <div>
     <p>Already have a account <Link href={"/signin"}>signIn</Link></p>
           </div>
           <PasswordStrengthMete password={UserDetails.password}/>
            <div>
             

            {(UserDetails.name && UserDetails.email && UserDetails.password) ?
              <button variant="text" onClick={submitForm}>{isloading ? 'loading' : 'SingUp'}</button>
            :
            <button variant="text" onClick={()=>{
              return Swal.fire({
                title: 'Error!',
                text: 'Please Fill all data',
                icon: 'error',
              })
            }}>SingUp</button>
            }


            </div>
            <button variant="text"onClick={()=>{
                window.open(`http://localhost:8000/auth/google`,"_self")
              }}>Signup with google</button>
        </div>
        </Box>
      </div>
 
  )
}


export default Page;