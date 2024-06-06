import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async() => {

  const session = await auth()

  if(!session?.user) return redirect("/")

  return (
    <div>Dashboard- only for the admin</div>
  )
}

export default page