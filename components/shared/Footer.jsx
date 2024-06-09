import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'

const socialLinks = [
    { href: 'https://twitter.com/hrshkshri', icon: BsTwitter, label: 'Twitter' },
    { href: 'https://www.instagram.com/hrshkshri/', icon: AiFillInstagram, label: 'Instagram' },
    { href: 'https://www.linkedin.com/in/hrshkshri/', icon: AiFillLinkedin, label: 'LinkedIn' },
    { href: 'https://github.com/hrshkshri', icon: AiFillGithub, label: 'GitHub' },
    { href: 'mailto:harshkeshari100@gmail.com', icon: AiFillMail, label: 'Email' },
];

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
