// app/page.tsx
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Showcase from './components/Showcase'


export default function Home() {
  return (
    <>
      <Hero />
   
      <About />
      <Gallery />
      <Contact />
      <Showcase /> {/* Dodali smo novu sekciju */}
    </>
  )
}
