import Image from 'next/image'
import React from 'react'

type Props = {
    image: any;
    title:string
}

export default function Card3({image,title}: Props) {
  return (
      <div className='flex flex-row sm:flex-col items-center justify-around  '>
          <Image src={image} alt={title} className='w-20 h-20' />
          <p className='text-wrap p-3 text-center'>
              {title}
          </p>
    </div>
  )
}