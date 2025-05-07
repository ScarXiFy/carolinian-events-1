import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t">
      <div className='flex-center flex flex-between flex-col text-center sm:flex-row bg-slate-200 p-5'>
        <Image src="/assets/images/logo.svg" alt="Evently logo" width={128} height={38} />
        <p>2024 Evently. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer