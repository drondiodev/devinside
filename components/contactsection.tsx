import Link from 'next/link'

import Container from '@/components/container'
import { FadeIn } from '@/components/fadein'
import { Button } from '@/components/ui/button'

export default function ContactSection() {
  return (
    <Container>
      <FadeIn>
        <div className="mx-auto max-w-4xl  px-6 py-20">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold first:mt-0 lg:text-3xl tracking-tighter">
              Contactez-nous pour plus d&apos;information.
            </h2>
            <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="text-xl lg:text-2xl font-sans font-normal tracking-tight text-muted-foreground">
                Work in Progess !
              </h3>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
