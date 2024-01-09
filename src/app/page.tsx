/* eslint-disable react-hooks/rules-of-hooks */
import Image from 'next/image'
import Navbar from './_components/navbar'
import Slider from './_components/slider'
import Details from './_components/details/page'
import About from './_components/Experience/page'
import { useEffect } from 'react'
import Projects from './_components/Projects/page'
import Contact from './_components/Contact/page'
import Certification from './_components/Certifications/page'
export default function Home() {
  return (
    <main>
      <h1 className='text-center font-bebas border-2 outline-2 outline-dashed decoration-wavy underline'>PORTFOLIO</h1>
      {/* <Navbar /> */}
      <Details/>
      <About/>
      <Projects/>
      <Certification/>
      <Contact/>
      {/* <Slider /> */}
    </main>
  );
}