import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='sticky top-0 flex items-center justify-between h-10 bg-white lg:h-14'>
     <Link href={"/dashboard"} className='hidden text-2xl font-semibold lg:flex'>Track.My.Expenses</Link>
     <Link href={"/dashboard"} className='flex text-2xl font-semibold lg:hidden'>TME</Link>
     <Link href={"/add"} className='px-6 py-1 text-white rounded-md shadow-md lg:px-8 lg:py-2 bg-fuchsia-950'>ADD</Link>
     <Link href={"/dashboard"}>SIGNOUT</Link>
    </div>
  )
}

export default Navbar