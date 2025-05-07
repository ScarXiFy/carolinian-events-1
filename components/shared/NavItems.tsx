'use client'

import { navItemsLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {
  const pathName = usePathname();

  return (
    <ul className='md:flex-row md:flex-between items-start flex flex-col gap-3 w-full'>
      {navItemsLinks.map((link) => {
        const isActive = pathName === link.path
        return (
          <li key={link.name} className={`${isActive && 'text-primary-500'} p-medium-16`}>
            <Link href={link.path} className='hover-underline'>
              {link.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavItems