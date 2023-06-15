import Image from 'next/image'
import React from 'react'

const Project = () => {
    return (
        <div className='flex space-x-3'>
            <div>
                <Image />
            </div>
            <div>
                <h1>Name of project</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dolor dolorem, alias illum rem beatae delectus enim cumque </p>
                <p>Tech stack</p>
                <Link
                    className="text-amber-300"
                    href="https://github.com/hrshkshri"
                >
                    <AiFillGithub className="w-5 h-5" />
                </Link>
            </div>
        </div>
    )
}

export default Project
