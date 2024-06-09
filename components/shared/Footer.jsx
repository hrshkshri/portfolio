import Link from 'next/link'
import React from 'react'
import { socialLinks } from '../shared/constant'

const Footer = () => {
    return (
        <div className="flex items-center justify-center space-x-5 p-4 text-white">
            {socialLinks.map((link, index) => (
                <Link key={index} href={link.href} aria-label={link.label}>
                    <link.icon className="w-6 h-6 hover:text-amber-300 transition-transform transform hover:scale-110" />
                </Link>
            ))}
        </div>
    )
}

export default Footer
