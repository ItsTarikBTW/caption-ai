import Navbar from './components/landing-page/Navbar'
import HeroMobile from './components/landing-page/HeroMobile'
import Hero from './components/landing-page/Hero'
import Features from './components/landing-page/Features'
import Pricing from './components/landing-page/Pricing'
import Examples from './components/landing-page/Examples'
import Footer from './components/landing-page/Footer'

export default function page() {
  return (
    <main className='bg-[#EEEEEE]'>
      <header>
        <Navbar />
        <HeroMobile />
        <Hero />
      </header>
      <Features />
      <Pricing />
      <Examples />
      <Footer />
    </main>
  )
}
