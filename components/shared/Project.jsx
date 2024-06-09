import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { FaLink } from "react-icons/fa";

const Project = () => {
    return (
        <div className='flex items-center bg-neutral-900 text-neutral-300 p-5 m-5 rounded-md hover:shadow-lg transition duration-300'>
            <div className='flex-shrink-0 w-24 h-24 rounded-md overflow-hidden mr-5'>
                <Image
                    src="/Img/2.svg"
                    alt="Project Logo"
                    width={100}
                    height={100}
                />
            </div>
            <div>
                <h1 className="font-bold text-xl text-neutral-100 mb-2">Name of Project</h1>
                <p className='font-sans text-md text-neutral-200 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dolor dolorem, alias illum rem beatae delectus enim cumque.</p>
                <p className='font-sans text-md font-semibold mb-2'>Tech Stack</p>
                <div className='flex space-x-3 flex-row items-center'>
                    <Link href="https://github.com/hrshkshri">
                        <AiFillGithub className="w-8 h-8 text-amber-300 hover:text-amber-400 cursor-pointer" />
                    </Link>
                    <Link href="https://example.com">
                        <FaLink className="w-7 h-7 text-amber-300 hover:text-amber-400 cursor-pointer" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Project
