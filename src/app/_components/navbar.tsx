/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
"use client";
import drop from '../../images/icons8-drag-list-down-50.png' 
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
function Navbar() {
  const [open,setOpen]=useState(false)
  return (
    <>
      <div className="relative flex md:text-center md:flex bg-orange-400 py-3 pl-3 border-doubled border-[#c3195d] rounded-md border-4">
        <h1 className="font-bold text-4xl animate-pulse">PORTFOLIO</h1>
        <div className="hidden md:inline lg:inline mt-2 md:ml-[18%] lg:ml-[24%]">
          <Link href={"Projects"} className="md:ml-8 lg:ml-26">
            Experience
          </Link>
          <Link href={"Projects"} className="md:ml-8 lg:ml-26">
            Academic
          </Link>
          <Link href={""} className="md:ml-8 lg:ml-26">
            Certificates
          </Link>
          <Link href={"Projects"} className="md:ml-8 lg:ml-26">
            Projects
          </Link>
          <Link href={"Projects"} className="md:ml-12 lg:ml-26">
            Contact
          </Link>
        </div>
      </div>
      <div className="absolute top-0 right-0 h-16 w-16">
        <Image
          src={drop}
          className="md:hidden float-right w-8  mt-4 hover:bg-gray-400 rounded hover:w-10 absolute"
          alt={"dropdown"}
        ></Image>
      </div>
    </>
  );
}

export default Navbar