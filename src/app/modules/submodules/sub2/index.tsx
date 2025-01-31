import React from 'react'
import { Taco,ChickenFriedMomo,ChickenKotheyMomo,ChickenSteamMomo,AlooRoti } from '../../../../../public/images'
import Card2 from '../../card/card2'
type Props = {}

const CARD_DATA = [
    {
        image: Taco,
        title: 'Taco',
        price:20
    },
    {
        image: ChickenFriedMomo,
        title: 'Chicken Fried Momo',
        price:25
    },
    {
        image: ChickenKotheyMomo,
        title: 'Chicken Kothey Momo',
        price:20
    },
    {
        image: ChickenSteamMomo,
        title: 'Chicken Steam Momo',
        price:20
    },
    {
        image: AlooRoti,
        title: 'Aloo Roti',
        price:10
    }
]
export default function SubModule2({}: Props) {
  return (
      <div className='flex flex-col justify-center items-center gap-4 py-4'>
          <h1 className='text-4xl font-bold'>Our <span className='text-orange-600'>Popular</span> Foods</h1>
          <p className='px-40 py-4 text-center text-wrap'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

          <div className='flex flex-row justify-center items-center flex-wrap gap-4'>
              {
                  CARD_DATA.map((card, index) => (
                      <Card2 key={index} image={card.image} price={card.price} title={card.title }  />
                  ))
              }
              
          </div>
    </div>
  )
}