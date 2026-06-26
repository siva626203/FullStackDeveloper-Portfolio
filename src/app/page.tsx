import Navbar from './_components/navbar'
import Details from './_components/details/page'
import About from './_components/Experience/page'
import Projects from './_components/Projects/page'
import Certification from './_components/Certifications/page'
import Contact from './_components/Contact/page'
import Footer from './_components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white grain">
      <Navbar />
      <Details />
      <About />
      <Projects />
      <Certification />
      <Contact />
      <Footer />
    </main>
  )
}