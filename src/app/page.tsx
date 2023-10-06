import Navbar from './components/landing-page/Navbar'
import HeroMobile from './components/landing-page/HeroMobile'
import Hero from './components/landing-page/Hero'
import Features from './components/landing-page/Features'
import Pricing from './components/landing-page/Pricing'

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
    </main>
  )
}
