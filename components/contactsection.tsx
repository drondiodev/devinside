import Link from 'next/link'

import Container from '@/components/container'
import { FadeIn } from '@/components/fadein'
import { Button } from '@/components/ui/button'

export default function ContactSection() {
  return (
    <Container>
      <FadeIn className=" bg-neutral-900 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Contactez-nous pour plus d&apos;information.
            </h2>
            <div className="mt-6 flex text-white">
              <Link href="/contact">Hello</Link>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-base font-semibold text-white">
                Où nous contacter ?
              </h3>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
