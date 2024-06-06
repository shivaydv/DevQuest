import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { auth } from '@/auth'
import SignInBtn, { LogoutBtn } from './SignInBtn'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Avatar, AvatarFallback } from './ui/avatar'

const Navbar = async() => {

    const session = await auth()
    // console.log(session)

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b dark:bg-gray-950 dark:border-gray-800">
      <div className=" flex items-center justify-between h-16 px-4 mx-auto md:px-6">
        <div className="flex items-center  w-full gap-4">
          <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
            <MountainIcon className="w-6 h-6" />
            <span className="sr-only">DevQuest</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link
              href="#"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              Questions
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              Playground
            </Link>
            
            <Link
              href="#"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              prefetch={false}
            >
              Home
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4 ">
        
          <div className="hidden md:block text-right text-nowrap">
            <div className="text-sm font-medium">{session?.user?.name }</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">@{session?.user?.email}</div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-9 w-9">
                <img src={session?.user?.image || ""} alt="Profile Picture" />
                <AvatarFallback>{session?.user?.name?.charAt(0)}</AvatarFallback>
                <span className="sr-only">Toggle user menu</span>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='mr-6 mt-4'>
              <DropdownMenuItem>My Account</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
        </div>
      </div>
    </header>
  )
}

function MountainIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
export default Navbar