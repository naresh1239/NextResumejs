import React, { useState,useEffect } from 'react'

const Personal = ({data,setdata}) => {
 const [currentColor, setcurrentColor] = useState('')

  const inputChnageFN = (e) =>{
    const {name,value} = e.target;
    setdata((prev)=>{
      return {...prev, [name] : value}
    })
  }

  useEffect(() => {
    console.log('hiiii')
 let timeout =  setTimeout(() => {
    console.log('timoput')
  }, 1000);
  return clearTimeout(timeout)
  }, [currentColor])

  
  const OnBlurFN = (e)=>{
    const {name,value} = e.target;
    setdata((prev)=>{
      return {...prev, [name] : currentColor}
    })
    
  }
  return (
    <div className='grid gap-6 mb-6 md:grid-cols-2 shadow-lg'>

         <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">First name</label>
            <input value={data.firstName} name='firstName' onChange={(e)=>inputChnageFN(e)} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="FirstName" required />
        </div>
        
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">Last Name</label>
            <input value={data.lastName} name='lastName' onChange={(e)=>inputChnageFN(e)} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Lastname" required />
        </div>
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">Job Title</label>
            <input value={data.jobTitle} name='jobTitle' onChange={(e)=>inputChnageFN(e)} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="jobTitle" required />
        </div>
       <div>
       <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">Address</label>
       <textarea cols={35} rows={3} value={data.address} name='address' onChange={(e)=>inputChnageFN(e)}/>
       </div>
       <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">Phone</label>
            <input type='number' value={data.phone} name='phone' onChange={(e)=>inputChnageFN(e)} id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone" required />
        </div>
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
            <input type='email' value={data.email} name='email' onChange={(e)=>inputChnageFN(e)} id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
        </div>
        <div>
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">themeColor</label>
  <input type='color' value={data.themeColor} name='themeColor' onBlur={(e)=>OnBlurFN(e)} onChange={(e)=>setcurrentColor(e.target.value)}/>
  </div>
  <div>
  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">Background Color</label>
  <input type='color' value={data.backgroundColor} name='backgroundColor' onBlur={(e)=>OnBlurFN(e)} onChange={(e)=>setcurrentColor(e.target.value)}/>
  </div>
  <div>
  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">Text Color</label>
  <input type='color' value={data.FontColor} name='FontColor' onBlur={(e)=>OnBlurFN(e)} onChange={(e)=>setcurrentColor(e.target.value)}/>
  </div>
  <textarea cols={50} rows={5} value={data.summary} name='summary' onChange={(e)=>inputChnageFN(e)}/>
  
    </div>
  )
}

export default Personal