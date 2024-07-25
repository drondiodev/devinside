import Image from 'next/image'
import Link from 'next/link'

import Container from './container'

export default function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <div className="shrink-0 bg-border h-[1px] w-full" />
      <footer className="relative mt-auto w-full py-8 2xl:py-16">
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0">
          <div className="flex w-full space-x-2 lg:w-4/12 xl:w-4/12 xl:space-x-6 2xl:space-x-8">
            <div className="flex flex-col space-y-4">
              <Link href="/">
                <div className="flex items-center gap-2">
                  <Image
                    alt="logo"
                    width="40"
                    height="40"
                    decoding="async"
                    src="/logo.svg"
                    priority
                  />
                  <span className="text-lg font-semibold">DevInside.</span>
                </div>
              </Link>
              <div className="flex flex-col space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Les meilleurs ressources à portée de clic
                  </p>
                </div>
                <div className="flex text-xs text-muted-foreground">
                  <p>
                    <span className="flex flex-col space-y-8">
                      <span className="mt-6 text-sm text-slate-500 sm:mt-0">
                        Copyright &copy; {new Date().getFullYear()}{' '}
                        Drondiodev.studio. All rights reserved.
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col space-y-8 lg:flex-row lg:justify-end lg:space-x-6 lg:space-y-0 xl:space-x-16">
            <div>
              <div className="flex flex-col space-y-2.5">
                <span className="font-heading">À propos</span>
                <ul className="flex flex-col space-y-2.5">
                  <li className="text-sm text-muted-foreground hover:underline">
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li className="text-sm text-muted-foreground hover:underline">
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="flex flex-col space-y-2.5">
                <span className="font-heading">Légal</span>
                <ul className="flex flex-col space-y-2.5">
                  <li className="text-sm text-muted-foreground hover:underline">
                    <Link href="/terms-of-service">
                      Conditions d&apos;utilisation
                    </Link>
                  </li>
                  <li className="text-sm text-muted-foreground hover:underline">
                    <Link href="/privacy-policy">
                      Politique de confidentialité
                    </Link>
                  </li>
                  <li className="text-sm text-muted-foreground hover:underline">
                    <Link href="/cookie-policy">
                      Politique en matière de cookies
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Container>
  )
}
