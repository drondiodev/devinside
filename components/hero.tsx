import Link from 'next/link'

import Container from '@/components/container'
import { FadeIn } from '@/components/fadein'

export default function Hero() {
  return (
    <Container className="flex items-center mt-10 w-full sm:mt-16 lg:mt-20">
      <FadeIn>
        <div className="flex w-full flex-1 flex-col items-center space-y-6 xl:space-y-8 2xl:space-y-10">
          <div>
            <h3 className="space-x-2.5 rounded-full border border-gray-100 px-2 py-2.5 text-center text-sm font-medium text-transparent dark:border-primary/10">
              <span className="rounded-2xl bg-primary px-2.5 py-1.5 text-sm font-semibold text-primary-foreground">
                Nouveau
              </span>
              <span className="bg-gradient-to-r from-foreground/50 to-foreground bg-clip-text text-transparent">
                <span>Votre package.json pour début de carrière !</span>
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
                  exclusives pour booster votre carrière.
                </span>
              </h3>
            </div>
          </div>
          <div>
            <div className="flex space-x-4">
              <Link
                className="inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground py-2 h-12 rounded-xl px-4 text-base font-semibold"
                href="/"
              >
                <span className="flex items-center space-x-0.5">
                  <span>S&apos;abonner</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-arrow-right h-4 animate-in fade-in slide-in-from-left-8 delay-1000 duration-1000 zoom-in fill-mode-both"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </Link>
              <Link
                className="inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring decoration-primary underline-offset-4 hover:underline py-2 h-12 rounded-xl px-4 text-base font-semibold"
                href="/"
              >
                Contactez-moi
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
