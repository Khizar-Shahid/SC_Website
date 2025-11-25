import Hero from '@/components/Hero'
import IntroSection from '@/components/IntroSection'
import ServicesCards from '@/components/ServicesCards'
import OurProcess from '@/components/OurProcess'
import HomeCTA from '@/components/HomeCTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <IntroSection />
      <ServicesCards />
      <OurProcess />
      <HomeCTA />
    </main>
  )
}

