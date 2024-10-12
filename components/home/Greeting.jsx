import React from "react";
import Image from "next/image";

const Greeting = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center space-y-2 p-10 text-white relative">
            <div className="flex space-x-1 items-center">
                <div className="flex flex-col">
                    <h2 className="text-4xl text-neutral-400 font-medium font-sans">
                        Hi, I'm{" "}
                        <span className="text-6xl font-bold text-amber-400 drop-shadow-lg shadow-neutral-100 font-serif">
                            Harsh
                        </span>
                        .
                    </h2>
                    <h1 className="lg:text-9xl min-[320px]:max-lg:text-8xl  text-amber-200 font-bold font-Rampart ">
                        I Code.
                    </h1>
                </div>
                <Image
                    className="block min-[320px]:max-lg:hidden"
                    src="/Img/2.svg"
                    alt="Logo"
                    width={400}
                    height={400}
                />
            </div>
            <div className="min-[320px]:max-md:flex min-[320px]:max-md:justify-center min-[320px]:max-md:items-center">
                <Image
                    className="lg:hidden block"
                    src="/Img/2.svg"
                    alt="Logo"
                    width={400}
                    height={400}
                />
            </div>
        </div>
    );
};

export default Greeting;
