import Image from 'next/image'
import React from 'react'
import { Cart ,Cook,Delivery,Puzzle,Wallet} from '../../../../../public/images'
import Card3 from '../../card/card3'



const CARD_DATA = [
    {
        image: Puzzle,
        title:"Fresh, hot momos in every box"
    },
    {
        image: Delivery,
        title: "Get your order delivered super fast!"
        
    },
    {
        image: Cook,
        title: "Expertly crafted by skilled chefs."
    },
    {
        image: Wallet,
        title: "Affordable momos that fit your budget."
    }
]

export default function SubModule3() {
  return (
      <div className='flex flex-col gap-10 container-bg w-full px-10 py-40'>
          <h2 className='text-4xl font-bold text-center'>Momo <span className='text-orange-600  font-bold'>Mobile</span></h2>
          <div className='flex flex-col-reverse md:flex-row'>
              <article className='text-center px-32 py-10'>
              "Craving delicious, freshly steamed momos? Look no further! Our unique bus cart serves a variety of mouthwatering momos, from classic favorites to exciting new flavors. Whether you're a fan of juicy chicken, spicy veg, or cheesy delights, we've got something for every momo lover. Order now and taste the difference!"
              </article>
              <Image src={Cart} alt="cart"/>
          </div>
          <h2 className='text-center font-bold text-4xl'>Services we <span className='text-orange-600'>Offer</span></h2>
          <div className='flex flex-row flex-wrap justify-center '>
              {
                  CARD_DATA.map((card, index) => (
                      <Card3 key={index} image={card.image} title={card.title} />
                  ))
              }
              

          </div>
          
    </div>
  )
}