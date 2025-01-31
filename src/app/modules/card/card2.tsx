"use client"
import Image from 'next/image'
import React from 'react'

type Props = {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    image: any
    title: string
    price: number
}

export default function Card2({ image, title, price }: Props) {
    return (
        <div className='flex flex-col border border-orange-600 '>
            <Image src={image} alt={title} className='w-60 h-60' />
            <div className='flex flex-col border-t-orange-600 border py-4'>
                <p className='text-center font-bold'>{title}</p>
                <div className='flex flex-row justify-around'>
                    <p>${price}</p>
                    <button className='bg-orange-500 text-white rounded-full px-2'>Order Now</button>
                </div>
            </div>



        </div>
    )
}