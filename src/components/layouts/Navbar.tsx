import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex gap-5'>
          <Link href="/" className="text-sm font-medium hover:text-cyan-700">
            Home
          </Link>
          <Link href="/posts" className="text-sm font-medium hover:text-cyan-700">
            Blog
          </Link>
        </nav>
  )
}

export default Navbar
