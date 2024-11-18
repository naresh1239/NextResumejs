import Link from 'next/link'
import React from 'react'
import { usePDF } from 'react-to-pdf';
const Navbar = () => {

    const routes = [
        {
            name : 'home',
            link : '/homepage'
        },
        {
            name : 'about',
            link : '/homepage/aboutpage'
        },
        {
            name : 'contanct',
            link : '/homepage/contactpage'
        },
        {
            name : 'service',
            link : '/homepage/servicepage'
        },
        {
            name : 'career',
            link : '/homepage/careerpage'
        },
        {
            name : 'resume',
            link : '/homepage/Resume'
        },
    ]
  return (
    <div className='flex gap-1 link'>
=
        {
            routes.map((item)=>{
                return <div><Link href={item.link} >{item.name}</Link></div>
            })
        }
    </div>
  )
}

export default Navbar