import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import BentoGrid from '@/components/BentoGrid/BentoGrid'
import Announcements from '@/components/Announcements/Announcements'
import Features from '@/components/Features/Features'
import CTA from '@/components/CTA/CTA'
import Footer from '@/components/Footer/Footer'
import Toast from '@/components/Toast/Toast'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <Announcements />
        <Features />
        <CTA />
      </main>
      <Footer />
      <Toast />
    </>
  )
}
