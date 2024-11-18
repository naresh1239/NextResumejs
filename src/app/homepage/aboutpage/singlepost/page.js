'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Header from './Header'
import { useSearchParams } from 'next/navigation'

const fetchData = async(id)=>{
    try {
     let resp = await fetch(`https://dummyjson.com/recipes/${id}`)
     let data = resp.json()
     return data
  
    } catch (error) {
    //  console.log(error)
    }
  }

const page = async() => {
    const searchParams = useSearchParams()
 
    const id = searchParams.get('id')

    const recipes = await fetchData(id)

  return (

    <div>
            <Header/>
        {

       <>
             <Image
        src={recipes.image}
        width={200}
        height={200}
        alt="Picture of the author"
      />
          <Link Link href={`/homepage/aboutpage/singlepost?id=${recipes.id}`}>{recipes.name}</Link>
          </>

  
      }</div>
  )
}

export default page