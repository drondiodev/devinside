import Link from 'next/link'
import React from 'react'

import Container from './container'

export default function features() {
  return (
    <Container className="flex items-center mt-20">
      <div className="flex flex-col justify-between space-y-8">
        <div className="flex w-full max-w-5xl flex-col space-y-4">
          <div className="flex">
            <div className="flex">
              <div className="flex items-center justify-center space-x-4 rounded-lg p-3 font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-layout-dashboard h-5"
                >
                  <rect width="7" height="10" x="3" y="3" rx="1" />
                  <rect width="7" height="6" x="14" y="3" rx="1" />
                  <rect width="7" height="10" x="14" y="12" rx="1" />
                  <rect width="7" height="6" x="3" y="16" rx="1" />
                </svg>
                <span>Pourquoi DevInside. est ta meilleure option ?</span>
              </div>
            </div>
          </div>
          <div className="text-3xl font-normal tracking-tighter xl:text-5xl">
            <p className="font-semibold dark:text-white my-5">
              Investissez dans votre version pro
            </p>
            <p className="bg-gradient-to-r from-foreground/50 to-foreground bg-clip-text text-transparent">
              Codez votre succès !
            </p>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 space-y-0 lg:grid-cols-3">
          <div className="rounded-3xl p-2 ring-2 ring-gray-100 dark:ring-primary/10 relative col-span-2 overflow-hidden bg-violet-500 text-white lg:h-96">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="tracking-tight text-xl font-semibold">
                Restez synchro avec l&apos;actu dev
              </h3>
              <p className="max-w-xs text-sm font-semibold tracking-tight text-current">
                Makerkit provides a beautiful dashboard to manage your SaaS
                business.
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
    </Container>
  )
}
