import Image from 'next/image'
import React from 'react'
import DhanushResume from '@/public/dhanush-resume.png'
export const metadata ={
  title: 'Resume'
}

function page() {
  return (
    <div>
     <Image width={100} height={100} src={DhanushResume} alt="dhanush-resume" className='w-[100vw] h-[200vw]' unoptimized/>
    </div>
  )
}

export default page
