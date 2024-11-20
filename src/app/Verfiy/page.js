'use client'
import React,{useEffect, useRef, useState,ChangeEvent,KeyboardEvent} from 'react'
import useApiCalling from "../hooks/useApiCalling";
import {Button,TextField,Box,Container} from "@mui/material"
import { useRouter } from 'next/navigation';

const Verfiy = () => {
    const [Opt, setOpt] = useState(['','','','','',''])
    const ref = [useRef(),useRef(),useRef(),useRef(),useRef(),useRef()]
    const [inputVal, setinputVal] = useState(Opt)
    const router = useRouter()
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const email = params.get('email');
    const opt = params.get('otp');

    console.log(opt)
    useEffect(() => {
       setinputVal(opt.split(''))
    }, [])
    
    const {data,isloading,callapi} = useApiCalling(router)


    
    const handleInputChange = (e,i)=>{

    if(e.target.value.length > 1 && e.target.value.length < 1){
       return
    }
    setinputVal((perv)=>{ return perv.map((item,key)=>{
        if(key == i){
          return  e.target.value
        }else{
            return item
        }
    })})
    ref[i + 1]?.current.focus()
    }
    
    const handlekeyup = (e,i)=>{
        if(e.code == "Backspace"){
            console.log(i)
            ref[i - 1]?.current.focus()   
        }
    }
    
  const handlePaste = (event) => {

 setinputVal(event.clipboardData.getData('text').split(''));
  };


  const sendData = {
    token : inputVal.join('').toString(),
    email :email
}
  return (
    <Box width='100%' height='100vh' display='flex' justifyContent='center' alignItems='center'>
    <Container style={{
      width: '100%',
      padding: '20px',
      backgroundColor: 'lightwhite',
    }}>
        <div className="prompt">
	   Enter the code generated on your mobile device below to log in!
      </div>
   <Box
      maxWidth='80%'
      alignItems='center'
      justifySelf='center'
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
{
    Opt.map((item,i)=>{
      return <TextField maxWidth="20px" id="filled-basic" variant="filled" onKeyUp={(e)=>handlekeyup(e,i)} onPaste={handlePaste}  maxLength={1}  ref={ref[i]} value={inputVal[i]} onChange={(e)=>handleInputChange(e,i)}/>
    })
}
</Box>
<Button style={{display:'flex', justifySelf : 'right'}}  variant="contained" onClick={()=>callapi(sendData,'verifiyToken')}>{isloading ? 'loading' : 'Verfiy'}</Button>
    </Container>
    </Box>
  )
}

export default Verfiy