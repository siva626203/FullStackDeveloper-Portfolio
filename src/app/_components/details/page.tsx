/* eslint-disable jsx-a11y/alt-text */
'use client'
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import profile from '../../../images/1637947122151-removebg.png'
import localfont from 'next/font/local'
import { useEffect } from 'react';
import Aos from 'aos';
import bg from '../../../images/7118756_3426523.svg'
const myfont = localfont({
  src: "../../Fonts/SnowForSanta.ttf",
  display:"swap",
});
function Page() {
useEffect(() => {
 window.scroll({
  top: -100,
  left: 100,
  behavior: "smooth",
})
}, []);
useEffect(() => {
  setTimeout(() => {
    Aos.init();
  }, 0);
}, []);
  return (
    <div>
      <div data-aos="fade-right" data-aos-duration="2000">
        <Image
          src={bg}
          alt="logo"
          className="hidden md:inline absolute w-[300px] md:mx-[37%] md:mt-20"
        />
      </div>
      <div className="flex justify-between">
        <div className="ml-18 md:mt-28 lg:mt-28 mt-14 ml-3 w-36 md:w-auto ">
          <h2 className={myfont.className}>Hi, I am SIVAKUMAR</h2>

          <TypeAnimation
            className={myfont.className}
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "I Am a MERN Stack Developer",
              1000,
              "I Am a Blockchain Researcher",
              1000,
              "I Am a Content Creator",
              1000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
          />
        </div>
        <div
          className="static "
          data-aos="fade-down"
        >
          <Image
            data-aos="fade-in"
            src={profile}
            alt="profile"
            className="lg:w-[300px] md:w-[200px] w-[130px] order-last  opacity-70 lg:my-20 md:my-20 my-12 
          shadow-lg shadow-indigo-500/50 lg:mr-16 md:mr-16 m-3 hover:border-x-pink-600 
          hover:border-y-lime-200 border-2 border-indigo-600 hover:skew-y-3 
          hover:transition border-dashed hover:-translate-y-2 duration-600 delay-300 
          hover:opacity-80 hover:delay-300"
          />
        </div>
      </div>
    </div>
  );
}

export default Page