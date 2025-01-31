import Image from 'next/image'
import React from 'react'

type Props = {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    image: any;
    title:string
}

export default function Card({image,title}: Props) {
  return (
      <div className='bg-slate-50 flex flex-col items-center justify-center rounded-lg p-4 w-40 shadow-lg'>
          
          <Image src={image} alt={title} className='w-10'/>
          
          <p className=''>
              {title}
              
          </p>
    </div>
  )
}