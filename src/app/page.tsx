import Navbar from './components/landing-page/Navbar'
import HeroMobile from './components/landing-page/HeroMobile'
import Hero from './components/landing-page/Hero'

export default function page() {
  return (
    <main className='bg-white'>
      <Navbar /> 
      <HeroMobile />
      <Hero />
    </main>
  )
}
