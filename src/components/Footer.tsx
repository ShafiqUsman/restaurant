import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-12 md:h-24 p4 lg:p-20 xl:p-40 text-red-500 flex items-center justify-between'>
      <Link href={'/'} className='font-bold texxl'>MASSIMO</Link>
      <p >© All RIGHTS RESERVED.</p >
    </div>
  )
}

export default Footer