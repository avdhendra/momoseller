import React from 'react'
import { Dumpline,Lemonade,Pizza,Ramen } from '../../../../../public/images'
import Card from '../../card/card'


interface CardItem {
    image: React.FC<React.SVGProps<SVGSVGElement>>; // SVG as React Component
    title: string;
}

const CARD_DATA:CardItem[] = [
    {
        image: Dumpline,
        title: 'Momos'
    },
    {
        image: Lemonade,
        title: 'Drinks'
    },
    {
        image: Pizza,
        title: 'Pizza'
    },
    {
        image: Ramen,
        title: 'Ramen'
    }
]

export default function SubModule1() {
  return (
      <div className='flex flex-col gap-4'>
          <h1 className='text-xl md:text-4xl font-bold text-center'>
          What we <span className='text-orange-600'>Offer</span>
          </h1>
          <div className='flex flex-col md:flex-row gap-4 justify-center items-center'>
              {CARD_DATA.map((card, index) => (
                  <Card key={index} image={card.image} title={card.title}/>
              ))}
      </div>
          
    </div>
  )
}