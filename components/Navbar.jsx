"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoIosList } from "react-icons/io";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="p-2 m-2 text-lg font-medium">
      <ul className="flex justify-between items-center space-x-5">
        <li className="hover:underline underline-offset-8">
          <Link href="/">Home</Link>
        </li>
        <div
          className={`flex flex-col justify-center pb-5 md:flex-row md:justify-center md:items-center md:space-x-5 md:pb-0 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16" : "top-[-490px]"
          }`}
        >
          <li className="hover:underline underline-offset-8">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:underline underline-offset-8">
            <Link href="/whatido">What I do</Link>
          </li>
          <li className="hover:underline underline-offset-8">
            <Link href="/mywork">My Work</Link>
          </li>
          <li className="hover:underline underline-offset-8">
            <Link href="/contact">Contact</Link>
          </li>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <IoIosList className="md:hidden w-5 h-5" />
        </button>
      </ul>
    </nav>
  );
}
