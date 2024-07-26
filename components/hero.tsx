import { ArrowBigRight } from 'lucide-react'
import Link from 'next/link'

import Container from '@/components/container'
import { FadeIn } from '@/components/fadein'

export default function Hero() {
  return (
    <Container className="flex items-center mt-10 w-full sm:mt-16 lg:mt-20">
      <FadeIn>
        <div className="flex w-full flex-1 flex-col items-center space-y-6 xl:space-y-8 2xl:space-y-10">
          <div>
            <h3 className="space-x-2.5 rounded-full border border-gray-200 px-2 py-2.5 text-center text-sm font-medium text-transparent dark:border-primary/10">
              <span className="rounded-2xl bg-primary px-2.5 py-1.5 text-sm font-semibold text-primary-foreground">
                Nouveau
              </span>
              <span className="bg-gradient-to-r from-foreground/50 to-foreground bg-clip-text text-transparent">
                <span>Ton package.json pour lancer ta carrière !</span>
              </span>
            </h3>
          </div>
          <div className="flex flex-col items-center space-y-8">
            <h1 className="hero-title flex flex-col space-y-1 text-center font-sans text-4xl font-semibold tracking-tighter dark:text-white sm:text-6xl lg:max-w-5xl lg:text-7xl xl:text-[5.125rem]">
              <span>
                Les meilleurs{' '}
                <span className="relative whitespace-nowrap text-blue-600">
                  ressources
                </span>
              </span>
              <span>à portée de clic</span>
            </h1>
            <div className="flex max-w-2xl flex-col space-y-1">
              <h3 className="scroll-m-20 tracking-tight lg:text-2xl p-0 text-center font-sans text-base font-normal">
                <span>
                  Un pas d&apos;avance sur les autres juniors : des ressources
                  exclusives pour booster ton apprentissage.
                </span>
              </h3>
            </div>
          </div>
          <div>
            <Link href="/" className="flex space-x-4">
              <button className="py-2 inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-primary-foreground shadow hover:bg-blue-600/80 h-14 rounded-md px-8 group my-6 whitespace-pre-wrap relative gap-2 overflow-hidden text-xl font-semibold tracking-tighter z-[999] cursor-pointer transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-blue-700 hover:ring-offset-2">
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96" />
                <span className="flex">S&apos;abonner</span>
              </button>
            </Link>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
