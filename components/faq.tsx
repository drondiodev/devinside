import Container from '@/components/container'
import { FadeIn } from '@/components/fadein'

export default function FAQ() {
  return (
    <Container className="flex items-center bg-[#F4F3FA]">
      <FadeIn>
        <div className="flex flex-col space-y-4 xl:space-y-8">
          <div className="border-b py-8 xl:py-10 2xl:py-12">
            <div className="container flex flex-col space-y-2 lg:space-y-4">
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
                    Do you offer a free trial?
                  </h2>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-down h-5 transition duration-300 group-open:-rotate-180"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </summary>
                <div className="flex flex-col space-y-2 py-1 text-muted-foreground">
                  Yes, we offer a 14-day free trial. You can cancel at any time
                  during the trial period and you won&apos;t be charged.
                </div>
              </details>
              <details className="group border-b px-2 py-4 last:border-b-transparent">
                <summary className="flex items-center justify-between hover:cursor-pointer hover:underline">
                  <h2 className="hover:underline-none cursor-pointer font-sans font-medium">
                    Can I cancel my subscription?
                  </h2>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-down h-5 transition duration-300 group-open:-rotate-180"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </summary>
                <div className="flex flex-col space-y-2 py-1 text-muted-foreground">
                  You can cancel your subscription at any time. You can do this
                  from your account settings.
                </div>
              </details>
              <details className="group border-b px-2 py-4 last:border-b-transparent">
                <summary className="flex items-center justify-between hover:cursor-pointer hover:underline">
                  <h2 className="hover:underline-none cursor-pointer font-sans font-medium">
                    Where can I find my invoices?
                  </h2>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-down h-5 transition duration-300 group-open:-rotate-180"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </summary>
                <div className="flex flex-col space-y-2 py-1 text-muted-foreground">
                  You can find your invoices in your account settings.
                </div>
              </details>
              <details className="group border-b px-2 py-4 last:border-b-transparent">
                <summary className="flex items-center justify-between hover:cursor-pointer hover:underline">
                  <h2 className="hover:underline-none cursor-pointer font-sans font-medium">
                    What payment methods do you accept?
                  </h2>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-down h-5 transition duration-300 group-open:-rotate-180"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </summary>
                <div className="flex flex-col space-y-2 py-1 text-muted-foreground">
                  We accept all major credit cards and PayPal.
                </div>
              </details>
              <details className="group border-b px-2 py-4 last:border-b-transparent">
                <summary className="flex items-center justify-between hover:cursor-pointer hover:underline">
                  <h2 className="hover:underline-none cursor-pointer font-sans font-medium">
                    Can I upgrade or downgrade my plan?
                  </h2>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-down h-5 transition duration-300 group-open:-rotate-180"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </summary>
                <div className="flex flex-col space-y-2 py-1 text-muted-foreground">
                  Yes, you can upgrade or downgrade your plan at any time. You
                  can do this from your account settings.
                </div>
              </details>
              <details className="group border-b px-2 py-4 last:border-b-transparent">
                <summary className="flex items-center justify-between hover:cursor-pointer hover:underline">
                  <h2 className="hover:underline-none cursor-pointer font-sans font-medium">
                    Do you offer discounts for non-profits?
                  </h2>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-down h-5 transition duration-300 group-open:-rotate-180"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </summary>
                <div className="flex flex-col space-y-2 py-1 text-muted-foreground">
                  Yes, we offer a 50% discount for non-profits. Please contact
                  us to learn more.
                </div>
              </details>
            </div>
            <div>
              <a
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                href="/contact"
              >
                <span>D&apos;autres questions, contactez-moi !</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right ml-2 w-4"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
