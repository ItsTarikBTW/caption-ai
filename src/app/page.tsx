import Navbar from './components/landing-page/Navbar'
import HeroMobile from './components/landing-page/HeroMobile'
import Hero from './components/landing-page/Hero'
import Features from './components/landing-page/Features'

export default function page() {
  return (
    <main className='bg-white'>
      <header>
        <Navbar />
        <HeroMobile />
        <Hero />
      </header>
      <Features />
    </main>
  )
}
