// import Banner from '@/components/banner'
import ContactSection from '@/components/contactsection'
import FAQ from '@/components/faq'
import Features from '@/components/features'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Pricing from '@/components/pricing'

export default function Home() {
  return (
    <>
      {/* <Banner /> */}
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
