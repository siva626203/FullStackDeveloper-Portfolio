import Image from 'next/image'
import Navbar from './_components/navbar'
import Slider from './_components/slider'
import Details from './_components/details/page'
export default function Home() {
  return (
    <main>
      <Navbar />
      <Details/>
      {/* <Slider /> */}
    </main>
  );
}