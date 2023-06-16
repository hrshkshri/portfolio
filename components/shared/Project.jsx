import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";

const Project = () => {
    return (
        <div className='flex space-x-3 bg-neutral-900 text-neutral-300 p-5 m-5 rounded-md hover:drop-shadow-[0_10px_8px_rgba(231,229,228,0.04)] transition ease-in-out delay-150 hover:-translate-y-1 hover:-translate-x-1 duration-300'>
            <div>
                <Image
                    className='rounded-md'
                    src="/Img/2.svg"
                    alt="Logo"
                    width={400}
                    height={400}
                />
            </div>
            <div className='flex flex-col space-y-3 justify-between'>
                <h1 className="font-bold text-2xl font-sans text-neutral-100">Name of project</h1>
                <p className='font-sans text-md font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dolor dolorem, alias illum rem beatae delectus enim cumque </p>
                <p className='font-sans text-md font-semibold'>Tech stack</p>
                <div className='flex space-x-2'>
                    <Link
                        className="text-amber-300"
                        href="https://github.com/hrshkshri"
                    >
                        <AiFillGithub className="w-8 h-8" />
                    </Link>
                    <Link
                        className="text-amber-300"
                        href="https://github.com/hrshkshri"
                    >
                        <BsGlobe className="w-8 h-8" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Project
