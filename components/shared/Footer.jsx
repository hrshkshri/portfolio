import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className="flex text-white items-center justify-center space-x-3 p-3 ">
            <Link
                className="hover:text-amber-300"
                href="https://twitter.com/hrshkshri"
            >
                <BsTwitter className="w-5 h-5" />
            </Link>
            <Link
                className="hover:text-amber-300"
                href="https://www.instagram.com/hrshkshri/"
            >
                <AiFillInstagram className="w-5 h-5" />
            </Link>
            <Link
                className="hover:text-amber-300"
                href="https://www.linkedin.com/in/hrshkshri/"
            >
                <AiFillLinkedin className="w-5 h-5" />
            </Link>
            <Link
                className="hover:text-amber-300"
                href="https://github.com/hrshkshri"
            >
                <AiFillGithub className="w-5 h-5" />
            </Link>
        </div>
    )
}

export default Footer
