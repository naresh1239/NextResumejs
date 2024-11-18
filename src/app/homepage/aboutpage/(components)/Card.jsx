import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const fetchData = async()=>{

    try {
     let resp = await fetch('https://dummyjson.com/recipes')
     let data = resp.json()
     return data
  
    } catch (error) {
    //  console.log(error)
    }
  }

const Card = async() => {
    const recipes = await fetchData()
  return (
    <div>{
        recipes.recipes?.length > 0 && 
        recipes.recipes.map((item)=>{
          return <>
             <Image
        src={item.image}
        width={200}
        height={200}
        alt="Picture of the author"
      />
          <Link Link href={`/homepage/aboutpage/singlepost?id=${item.id}`}>{item.name}</Link>
          </>
        })
  
      }</div>
  )
}

export default Card