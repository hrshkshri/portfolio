import Link from 'next/link'
import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BsFillPersonVcardFill, BsPersonWorkspace } from 'react-icons/bs'
import { MdOutlineSms } from 'react-icons/md'

const MobNav = ({ activeRoute }) => {
    return (
        <div className="navbar p-2 justify-between text-neutral-400 border-t border-gray-700 hidden min-[320px]:max-sm:block min-[320px]:max-sm:flex">
            <Link
                href="/home"
                className={`hover:text-amber-100 ${activeRoute === "/home" ? `text-white` : ``
                    } font-medium py-2 px-4 mx-2`}
            >
                <AiOutlineHome className="w-5 h-5" />
            </Link>
            <Link
                href="/whatido"
                className={`hover:text-amber-100 ${activeRoute === "/whatido" ? `text-white` : ``
                    } font-medium py-2 px-4 mx-2`}
            >
                <BsPersonWorkspace className="w-5 h-5" />
            </Link>
            {/* <Link
                href="/mywork"
                className={`hover:text-amber-100 ${activeRoute === "mywork" ? `text-white` : ``
                    } font-medium py-2 px-4`}
            >
                <BsJournalCode className="w-5 h-5" />
            </Link> */}
            <Link
                href="/about"
                className={`hover:text-amber-100 ${activeRoute === "/about" ? `text-white` : ``
                    } font-medium py-2 px-4 mx-2`}
            >
                <BsFillPersonVcardFill className="w-5 h-5" />
            </Link>
            <Link
                href="/contact"
                className={`hover:text-amber-100 ${activeRoute === "/contact" ? `text-white` : ``
                    } font-medium py-2 px-4 mx-2`}
            >
                <MdOutlineSms className="w-5 h-5" />
            </Link>
        </div>
    )
}

export default MobNav
