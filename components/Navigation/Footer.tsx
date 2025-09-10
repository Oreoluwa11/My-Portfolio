import React from 'react'
import Image from "next/image";

export default function Footer() {
  return (
    <div className='bg-footer items-center text-center text-white flex flex-col py-10'>
      <Image src="/p-logo.svg" alt="Logo" width={64} height={64} />
      <p>Contact: +234 813 029 7049</p>
      <p>Contact: +234 813 029 7049</p>
      <p>Contact: +234 813 029 7049</p>
      <p>Contact: +234 813 029 7049</p>
      <p className='mb-10'>Contact: +234 813 029 7049</p>
      <p>© 2024 Rahmat. All rights reserved.</p>
    </div>
  )
}
