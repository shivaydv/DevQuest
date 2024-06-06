import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-2 h-full'>
      <h1 className='text-3xl font-bold'>Page Not Found</h1>
      <p className='text-lg'>Sorry, we couldn't find that page.</p>
      <Link href={'/'}><Button variant={"link"}>Go back home</Button></Link>
    </div>
  )
}

export default notFound