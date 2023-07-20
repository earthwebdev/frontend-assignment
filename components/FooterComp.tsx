import Link from 'next/link'
import React from 'react'
import { BiLogoFacebook, BiLogoGithub, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi'

const FooterComp = () => {
  return (    
        <div className='flex flex-row justify-between items-center gap-4'>
                <div className=''>
                    Copyright © 2023 Online Store
                </div>

                <div className="flex flex-row justify-between items-center gap-4">
                    <Link href="#!" className="btn btn-primary gap-2"><BiLogoFacebook /></Link>
                    <Link href="https://np.linkedin.com/in/prithvi-singh-83782768" className="btn btn-primary gap-2"><BiLogoLinkedin /></Link>
                    <Link href="https://www.instagram.com/pmsingh21st/" className="btn btn-danger mx-3 gap-2"><BiLogoInstagram /></Link>
                    <Link href="https://github.com/earthwebdev" className="btn btn-secondary gap-2"><BiLogoGithub /></Link>
                </div>
        </div>
  )
}

export default FooterComp