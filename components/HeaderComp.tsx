import Link from 'next/link'
import React from 'react'
import { BiCart, BiSearch, BiUser } from "react-icons/bi";

const HeaderComp = () => {
  return (
    <>
        <div className='flex flex-row justify-between items-center'>
            <div className='logo font-bold'><Link href="/">Online Store</Link></div>
            <div className='categories hidden md:hidden lg:contents '>                
                    <ul className='flex flex-row justify-between items-center gap-4 uppercase'>
                        <li>electronics</li>
                        <li>jewelery</li>
                        <li>men's clothing</li>
                        <li>women's clothing</li>
                    </ul>               
                </div>
                
                <div className='search'>

                    <input className='py-[8px] px-4' type='text' placeholder='Search Products' />
                    <button className='-ms-[20px]' type='button'><BiSearch /></button>
                </div>
            
            
            <div className='flex flex-row justify-between items-center gap-4'>

                <Link href='/login'><BiUser /></Link>
                <Link href='/cart'><BiCart /></Link>
            </div>
        </div>
    </>
  )
}

export default HeaderComp