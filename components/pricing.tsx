import { CircleCheckBig } from 'lucide-react'
import Link from 'next/link'

import Container from '@/components/container'
import { FadeIn } from '@/components/fadein'

export default function Pricing() {
  return (
    <Container className="flex items-center mt-10 w-full sm:mt-16 lg:mt-20">
      <FadeIn className="max-w-4xl">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center space-y-16 py-16">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex flex-col">
                <h2 className="scroll-m-20 pb-2 text-2xl font-semibold first:mt-0 lg:text-3xl tracking-tighter">
                  Choisissez l&apos;abonnement approprié
                </h2>
                <h3 className="scroll-m-20 text-xl lg:text-2xl font-sans font-normal tracking-tight text-muted-foreground">
                  Enrichissez Votre Boîte à Outils Mois après Mois
                </h3>
              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-col space-y-8 xl:space-y-12">
                <div className="flex justify-center" />
                <div className="flex flex-col items-start space-y-6 lg:space-y-0 justify-center lg:flex-row lg:space-x-4">
                  <div className="relative flex flex-1 grow flex-col items-stretch justify-between self-stretch rounded-xl border p-8 lg:w-4/12 xl:max-w-[20rem] border-border">
                    <div className="absolute -top-2.5 left-0 flex w-full justify-center" />
                    <div className="flex flex-col space-y-6">
                      <div className="flex flex-col space-y-2.5">
                        <div className="flex items-center space-x-6">
                          <b className="text-current-foreground font-heading font-semibold uppercase tracking-tight">
                            Starter
                          </b>
                        </div>
                        <span className="text-muted-foreground h-6 text-sm">
                          Votre parcours dev personnalisé
                        </span>
                      </div>
                      <div className="shrink-0 bg-border h-[1px] w-full" />
                      <div className="flex flex-col space-y-1">
                        <div>
                          <span className="font-heading flex items-center text-3xl font-bold tracking-tighter lg:text-4xl">
                            5 €
                          </span>
                        </div>
                        <span className="text-muted-foreground flex items-center space-x-0.5 text-sm capitalize">
                          <span>Facturé mensuellement</span>
                        </span>
                      </div>
                      <Link className="w-full" href="/">
                        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-8 border-primary w-full rounded-lg border">
                          <span>Je m&apos;abonne au mois</span>
                        </button>
                      </Link>
                      <div className="shrink-0 bg-border h-[1px] w-full" />
                      <div className="flex flex-col">
                        <ul className="flex flex-col space-y-2">
                          <li className="flex items-center space-x-2.5">
                            <CircleCheckBig className="h-4 w-4" />
                            <span className="text-xs text-secondary-foreground">
                              Accès à des ressources sélectionnées chaque mois
                            </span>
                          </li>
                          <li className="flex items-center space-x-2.5">
                            <CircleCheckBig className="h-4 w-4" />
                            <span className="text-xs text-secondary-foreground">
                              Flexibilité d&apos;annulation : testez sans
                              engagement à long terme
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex flex-1 grow flex-col items-stretch justify-between self-stretch rounded-xl border p-8 lg:w-4/12 xl:max-w-[20rem] border-primary">
                    <div className="absolute -top-2.5 left-0 flex w-full justify-center">
                      <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                        <span>Le plus populaire</span>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-6">
                      <div className="flex flex-col space-y-2.5">
                        <div className="flex items-center space-x-6">
                          <b className="text-current-foreground font-heading font-semibold uppercase tracking-tight">
                            Premium
                          </b>
                        </div>
                        <span className="text-muted-foreground h-6 text-sm">
                          365 jours de ressources ciblées
                        </span>
                      </div>
                      <div className="shrink-0 bg-border h-[1px] w-full" />
                      <div className="flex flex-col space-y-1">
                        <div>
                          <span className="font-heading flex items-center text-3xl font-bold tracking-tighter lg:text-4xl">
                            39 €
                          </span>
                        </div>
                        <span className="text-muted-foreground flex items-center space-x-0.5 text-sm capitalize">
                          <span>Facturé annuellement</span>
                        </span>
                      </div>
                      <Link className="w-full" href="/">
                        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-8 border-primary w-full rounded-lg border">
                          <span>Je m&apos;abonne à l&apos;année</span>
                        </button>
                      </Link>
                      <div className="shrink-0 bg-border h-[1px] w-full" />
                      <div className="flex flex-col">
                        <ul className="flex flex-col space-y-2">
                          <li className="flex items-center space-x-2.5">
                            <CircleCheckBig className="h-4 w-4" />
                            <span className="text-xs text-secondary-foreground">
                              Économisez 35% par rapport à l&apos;abonnement
                              mensuel
                            </span>
                          </li>
                          <li className="flex items-center space-x-2.5">
                            <CircleCheckBig className="h-4 w-4" />
                            <span className="text-xs text-secondary-foreground">
                              Accès prioritaire aux nouvelles ressources et
                              contenus exclusifs
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
