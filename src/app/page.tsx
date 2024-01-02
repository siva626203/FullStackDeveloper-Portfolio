/* eslint-disable react-hooks/rules-of-hooks */
import Image from 'next/image'
import Navbar from './_components/navbar'
import Slider from './_components/slider'
import Details from './_components/details/page'
import About from './_components/about/page'
import { useEffect } from 'react'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Details/>
      <About/>
      {/* <Slider /> */}
    </main>
  );
}