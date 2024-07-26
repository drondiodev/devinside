import { Lightbulb } from 'lucide-react'
import React from 'react'

import Container from './container'
import { FadeIn } from './fadein'

export default function Features() {
  return (
    <Container className="flex items-center mt-20">
      <FadeIn>
        <div className="flex flex-col justify-between space-y-8">
          <div className="flex w-full max-w-5xl flex-col space-y-4">
            <div className="text-3xl font-normal tracking-tighter xl:text-5xl">
              <div className="flex flex-col items-center justify-center">
                <div className="flex items-center space-x-4 rounded-lg p-3 font-semibold">
                  <Lightbulb />
                  <span>Pourquoi DevInside. est ta meilleure option ?</span>
                </div>
                <p className="bg-gradient-to-r from-foreground/50 to-foreground bg-clip-text text-transparent">
                  Investissez dans votre version pro : codez votre succès !
                </p>
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-6 space-y-0 lg:grid-cols-3">
            <div className="rounded-3xl p-2 ring-2 ring-gray-100 dark:ring-primary/10 relative col-span-2 overflow-hidden bg-violet-500 text-white lg:h-96">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="tracking-tight text-xl font-semibold">
                  Restez synchro avec l&apos;actu dev
                </h3>
                <p className="max-w-xs text-sm font-semibold tracking-tight text-current">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Commodi, debitis!
                </p>
              </div>
              <div className="p-6 pt-0" />
            </div>
            <div className="rounded-3xl p-2 ring-2 ring-gray-100 dark:ring-primary/10 relative col-span-2 w-full overflow-hidden lg:col-span-1">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="tracking-tight text-xl font-semibold">
                  Déployez votre potentiel
                </h3>
                <p className="max-w-xs text-sm font-semibold tracking-tight text-current">
                  Laissez-moi dénicher les perles rares : concentrez-vous sur
                  votre progression
                </p>
              </div>
              <div className="p-6 pt-0" />
            </div>
            <div className="rounded-3xl p-2 ring-2 ring-gray-100 dark:ring-primary/10 relative col-span-2 overflow-hidden lg:col-span-1 lg:h-96">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="tracking-tight text-xl font-semibold">
                  Mergez expertise et opportunités
                </h3>
                <p className="max-w-xs text-sm font-semibold tracking-tight text-current">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Commodi, debitis!
                </p>
              </div>
              <div className="p-6 pt-0" />
            </div>
            <div className="rounded-3xl p-2 ring-2 ring-gray-100 dark:ring-primary/10 relative col-span-2 overflow-hidden lg:h-96">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="tracking-tight text-xl font-semibold">
                  Pushez vos skills vers la prod
                </h3>
                <p className="max-w-xs text-sm font-semibold tracking-tight text-current">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Commodi, debitis!
                </p>
              </div>
              <div className="p-6 pt-0" />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
