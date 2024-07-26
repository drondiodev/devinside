import React from 'react'

import Container from '@/components/container'
import { FadeIn } from '@/components/fadein'

export default function Testimonials() {
  return (
    <Container>
      <FadeIn>
        <div className="z-10 mt-20 flex flex-col items-center gap-3 text-center text-foreground">
          <h1 className="w-2/3 text-2xl font-bold lg:text-4xl">
            Rejoins des développeurs qui ont les mêmes besoins que toi.
          </h1>
          <button className="py-2 inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  bg-blue-600 text-primary-foreground shadow hover:bg-blue-600/80 h-14 rounded-md px-8 group my-6 whitespace-pre-wrap relative gap-2 overflow-hidden text-xl font-semibold tracking-tighter z-[999] cursor-pointer transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-blue-700 hover:ring-offset-2">
            <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96" />
            <span className="flex">Rejoindre DevInside Premium (-35%)</span>
          </button>
        </div>
      </FadeIn>
    </Container>
  )
}
