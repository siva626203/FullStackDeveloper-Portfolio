/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
"use client";
import drop from '../../images/icons8-drag-list-down-50.png' 
import dropoff from "../../images/icons8-x-24.png"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from 'react';
function Navbar() {
  const [open,setOpen]=useState(false)
  const winclick=(e:any,val:string)=>{
    console.log(e.type,val)
    window.scrollBy(0,400)
  }
  return (
    <>
      <div className="relative flex md:text-center md:flex bg-orange-400 py-3 pl-3 border-doubled border-[#c3195d] rounded-md border-4">
        <h1 className="font-bold text-4xl animate-pulse">PORTFOLIO</h1>
        <div className=" md:inline lg:inline md:mt-2 mt-16 md:ml-[3%]  lg:ml-[24%] flex flex-col text-center">
          <Link
            onClick={(e) => winclick(e, "experience")}
            className="md:ml-8 lg:ml-26 md:inline hidden"
            href={""}
          >
            Experience
          </Link>
          <Link href={"Projects"} className="md:ml-8 lg:ml-26 md:inline hidden">
            Academic
          </Link>
          <Link href={""} className="md:ml-8 lg:ml-26 md:inline hidden">
            Certificates
          </Link>
          <Link href={"Projects"} className="md:ml-8 lg:ml-26 md:inline hidden">
            Projects
          </Link>
          <Link
            href={"Projects"}
            className="md:ml-12 lg:ml-26 md:inline hidden"
          >
            Contact
          </Link>
          {open ? (
            <>
              <Link
                onClick={(e) => winclick(e, "experience")}
                className="md:ml-8 lg:ml-26"
                href={""}
              >
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
            </>
          ) : null}
        </div>
      </div>
      <div className="absolute top-0 right-0 h-16 w-16 flex-row">
        {open ? (
          <Image
            src={dropoff}
            className="md:hidden float-right w-8  mt-4 hover:bg-gray-400 rounded hover:w-10 absolute hover:cursor-pointer"
            alt={"dropdown"}
            onClick={(e) => setOpen(false)}
          ></Image>
        ) : (
          <Image
            src={drop}
            className="md:hidden float-right w-8  mt-4 hover:bg-gray-400 rounded hover:w-10 absolute hover:cursor-pointer"
            alt={"dropdown"}
            onClick={(e) => setOpen(true)}
          ></Image>
        )}
      </div>
    </>
  );
}

export default Navbar