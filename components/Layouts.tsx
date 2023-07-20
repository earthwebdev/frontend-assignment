import React from 'react'
import HeaderComp from './HeaderComp'
import FooterComp from './FooterComp'

const RootLayout = (props: any) => {
  return (
    <>
        <div className='container mx-auto py-8'>
          <HeaderComp />
        </div>
        
          {props.children}
        <div className='w-full bg-black '>
          <div className='container mx-auto py-8 text-white'>
            <FooterComp />
          </div>
        </div>
    </>
    
  )
}

export default RootLayout