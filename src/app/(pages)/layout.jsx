import React from 'react'
import { Lato } from 'next/font/google'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});

const layout = ({children}) => {
  return (
    <main className={`${lato.className} text-slate-950 h-screen w-full px-2 py-2 lg:px-4 overflow-x-hidden flex flex-col justify-between`}>
     <Navbar/>
     {children}
    
    </main>
  )
}

export default layout