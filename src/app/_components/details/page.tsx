'use client'
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import localfont from 'next/font/local'
const myfont = localfont({
  src: "../../Fonts/SnowForSanta.ttf",
  display:"swap"
});
function page() {

  return (
    <div className="flex">
      <div className="flex-1">
        <h1 className={myfont.className}>Hi, I am SIVAKUMAR</h1>

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
    </div>
  );
}

export default page