'use client'

import React from 'react'
import {redirect, useSearchParams } from "next/navigation"
import Form from './Form'
const page = () => {
  const searchParams = useSearchParams()
 
  const name = searchParams.get('name')

  return (
    <div>
      <Form/>
    </div>
  )
}

export default page