import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
// import Swal from 'sweetalert2'
const useCallApis = () => {
    const [data, setdata] = useState([])
    const [isloading, setisloading] = useState(false)
    const [isReset,setIsResset] = useState(null)
    // const navigate = useNavigate()
    const router = useRouter()
    async function callapi(params, url) {
        setisloading(true);
        try {
            const response = await fetch(`http://localhost:8080/auth/${url}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // credentials: 'include', // Similar to `withCredentials: true` in axios
                body: JSON.stringify(params)
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setisloading(false);
            setdata(data);
            console.log(url)
            if(url == 'verifiyToken' || url == 'signin') router.push('/homepage')
        } catch (error) {
            console.error(error);
            setisloading(false);
        }
    }
    

    function logout(){
        axios.get(`http://localhost:8000/auth/logout`,{
            withCredentials: true
        }).then((res)=>{
              console.log(res.data)
            //   navigate('/signup')
        }).catch((error)=>console.log(error))
    }

   
    function ResetPassword(email){
        axios.post(`http://localhost:8000/auth/ResetPassword`,{email : email},{
            withCredentials: true
        }).then((res)=>{
              setIsResset(true)
        }).catch((error)=>{console.log(error)
            setIsResset(false)

        })
    }


    function ResetPasswordTokenVerfiy(sendData){
        axios.post(`http://localhost:8000/auth/ResetPasswordTokenVerfiy`,sendData,{
            withCredentials: true
        }).then((res)=>{
              setIsResset(true)
            //   navigate("/signin")
        }).catch((error)=>{console.log(error)
            setIsResset(false)

        })
    }

    return {data,isloading,callapi,logout,isReset,ResetPassword,ResetPasswordTokenVerfiy}
}

export default useCallApis