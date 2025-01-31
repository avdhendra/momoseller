import React from 'react'
import Navbar from '../navbar'
import HeadingComponent from '../heading'
import SubModule1 from '../submodules/sub1'
import SubModule2 from '../submodules/sub2'
import SubModule3 from '../submodules/sub3'

type Props = {}

export default function MainComponent({}: Props) {
  return (
    <div className="h-screen w-screen  flex flex-col px-4">
      <Navbar/>
      <HeadingComponent /> 
      <SubModule1 />
      <SubModule2 />
      <SubModule3/>
    </div>
  )
}