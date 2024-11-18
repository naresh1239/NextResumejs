
import React from 'react'
import Image from 'next/image'
import Card from './(components)/Card'
import { Suspense } from 'react'



const page = async() => {


  return (
   
   <Suspense fallback={<p>Loading feed...</p>}>
   <Card/>
  </Suspense>
  )
}

export default page