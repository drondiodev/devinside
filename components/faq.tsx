import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

import Container from '@/components/container'
import { FadeIn } from '@/components/fadein'

export default function Faq() {
  return (
    <Container className="flex items-center mt-10 bg-[#F4F3FA]">
      <FadeIn>
        <div className="flex w-full max-w-5xl space-y-4 xl:space-y-8">
          <div className="border-b py-8 xl:py-10 2xl:py-12">
            <div className="flex flex-col space-y-2 lg:space-y-4">
              <h1 className="font-heading text-3xl font-medium tracking-tighter dark:text-white xl:text-5xl">
                FAQ
              </h1>
              <h2 className="text-lg tracking-tight text-muted-foreground 2xl:text-2xl">
                Débuggez vos doutes !
              </h2>
            </div>
          </div>
          <div className="container flex flex-col space-y-8 pb-16">
            <div className="flex w-full max-w-xl flex-col">
              <details className="group border-b px-2 py-4 last:border-b-transparent">
                <summary className="flex items-center justify-between hover:cursor-pointer hover:underline">
                  <h2 className="hover:underline-none cursor-pointer font-sans font-medium">
                    Qu&apos;est-ce que DevInside ?
                  </h2>
                  <div>
                    <ChevronDown className="h-5 transition duration-300 group-open:-rotate-180" />
                  </div>
                </summary>
                <div className="flex flex-col space-y-2 py-1 text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </div>
              </details>
              <details className="group border-b px-2 py-4 last:border-b-transparent">
                <summary className="flex items-center justify-between hover:cursor-pointer hover:underline">
                  <h2 className="hover:underline-none cursor-pointer font-sans font-medium">
                    DevInside est-il gratuit ?
                  </h2>
                  <div>
                    <ChevronDown className="h-5 transition duration-300 group-open:-rotate-180" />
                  </div>
                </summary>
                <div className="flex flex-col space-y-2 py-1 text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </div>
              </details>
              <details className="group border-b px-2 py-4 last:border-b-transparent">
                <summary className="flex items-center justify-between hover:cursor-pointer hover:underline">
                  <h2 className="hover:underline-none cursor-pointer font-sans font-medium">
                    Puis-je modifier mon abonnement à tout moment ?
                  </h2>
                  <div>
                    <ChevronDown className="h-5 transition duration-300 group-open:-rotate-180" />
                  </div>
                </summary>
                <div className="flex flex-col space-y-2 py-1 text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </div>
              </details>
            </div>
            <div>
              <Link
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border  bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-5"
                href="/contact"
              >
                <span>D&apos;autres questions, contactez-moi !</span>
                <ChevronDown className="h-5 transition duration-300 group-open:-rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
