import Link from 'next/link'
import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BsFillPersonVcardFill, BsPersonWorkspace } from 'react-icons/bs'
import { MdOutlineSms } from 'react-icons/md'

const LeftSidebar = ({ activeRoute }) => {

    return (
        <div className="flex flex-col justify-between my-5">
            <Link
                href="/home"
                className={`flex items-center hover:text-amber-100 ${activeRoute === "/home" ? `text-white` : ``
                    } font-medium py-2 px-4 mx-2`}
            >
                <AiOutlineHome className="w-5 h-5 mx-2" />
                <span className="sm:max-lg:hidden">Home</span>
            </Link>
            <Link
                href="/whatido"
                className={`flex items-center hover:text-amber-100 ${activeRoute === "/whatido" ? `text-white` : ``
                    } font-medium py-2 px-4 mx-2`}
            >
                <BsPersonWorkspace className="w-5 h-5 mx-2" />
                <span className="sm:max-lg:hidden">What I Do</span>
            </Link>
            {/* <Link
                href="/mywork"
                className={`flex items-center hover:text-amber-100 ${activeRoute === "mywork" ? `text-white` : ``
                    } font-medium py-2 px-4 mx-2`}
            >
                <BsJournalCode className="w-5 h-5 mx-2" />
                <span className="sm:max-lg:hidden">My Work</span>
            </Link> */}
            <Link
                href="/about"
                className={`flex items-center hover:text-amber-100 ${activeRoute === "/about" ? `text-white` : ``
                    } font-medium py-2 px-4 mx-2`}
            >
                <BsFillPersonVcardFill className="w-5 h-5 mx-2" />
                <span className="sm:max-lg:hidden">About</span>
            </Link>
            <Link
                href="/contact"
                className={`flex items-center hover:text-amber-100 ${activeRoute === "/contact" ? `text-white` : ``
                    } font-medium py-2 px-4 mx-2`}
            >
                <MdOutlineSms className="w-5 h-5 mx-2" />
                <span className="sm:max-lg:hidden">Contact</span>
            </Link>
        </div>
    )
}

export default LeftSidebar
