import Image from 'next/image'
import Link from 'next/link'

import Container from './container'

export default function Header() {
  return (
    <Container
      as="header"
      className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 w-full"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex h-16 w-full items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center lg:justify-start gap-5">
              <div className="flex items-center pr-5 lg:border-r border-gray-500">
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
              </div>
              <div className="italic text-black lg:block hidden">
                Accélérateur de talents dev.
              </div>
            </div>
          </div>
          <nav className="flex space-x-6">
            <div className="hidden items-center gap-8 lg:flex">
              <Link
                className="cursor-pointer font-medium capitalize text-slate-900  sm:text-sm"
                href="/"
              >
                <span className="flex">Tarifs</span>
              </Link>
              <Link
                className="cursor-pointer font-medium capitalize text-slate-900 sm:text-sm"
                href="/templates"
              >
                <span className="flex">
                  FAQ
                  <span
                    className="ml-1 size-1.5 rounded-full bg-blue-500 pb-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>

              <div className="h-6 lg:border-l" />
            </div>
            <div className="hidden lg:ml-4 lg:flex lg:items-center lg:border-slate-200">
              <div className="flex items-center gap-4">
                <Link
                  className="inline-flex w-fit cursor-pointer items-center justify-center rounded-md px-3 py-2 sm:text-sm font-medium disabled:pointer-events-none disabled:opacity-60 transition-all duration-100 ease-in-out focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 bg-transparent text-slate-900"
                  href="/"
                >
                  Se connecter
                </Link>
                <Link
                  className="inline-flex w-fit cursor-pointer items-center justify-center rounded-md px-3 py-2 sm:text-sm font-medium disabled:pointer-events-none disabled:opacity-60 transition-all ease-in-out focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 relative group bg-gradient-to-b from-blue-500 to-blue-600 hover:opacity-90 text-white active:scale-[99%] duration-200 shadow-sm"
                  href="/"
                >
                  Mon accès
                </Link>
              </div>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
              >
                <span className="sr-only">Ouvrir le menu principal</span>
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="remixicon size-6"
                >
                  <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </Container>
  )
}
