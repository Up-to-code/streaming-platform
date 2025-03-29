import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { getDictionary } from "@/lib/dictionary"

function CookiesLoading() {
  return (
    <div className="min-h-screen light-mode-bg light-mode-text pt-20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Skeleton className="h-10 w-64 mb-6 bg-zinc-200 dark:bg-zinc-800" />
        <Skeleton className="h-5 w-full mb-4 bg-zinc-200 dark:bg-zinc-800" />
        <Skeleton className="h-5 w-full mb-4 bg-zinc-200 dark:bg-zinc-800" />
        <Skeleton className="h-5 w-3/4 mb-8 bg-zinc-200 dark:bg-zinc-800" />

        {[1, 2, 3, 4].map((section) => (
          <div key={section} className="mb-8">
            <Skeleton className="h-8 w-48 mb-4 bg-zinc-200 dark:bg-zinc-800" />
            <Skeleton className="h-5 w-full mb-3 bg-zinc-200 dark:bg-zinc-800" />
            <Skeleton className="h-5 w-full mb-3 bg-zinc-200 dark:bg-zinc-800" />
            <Skeleton className="h-5 w-full mb-3 bg-zinc-200 dark:bg-zinc-800" />
            <Skeleton className="h-5 w-4/5 mb-3 bg-zinc-200 dark:bg-zinc-800" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function CookiesPage({
  params: { lang = "en" },
}: {
  params: { lang?: string }
}) {
  const dict = await getDictionary(lang || "en")

  return (
    <Suspense fallback={<CookiesLoading />}>
      <div className="min-h-screen light-mode-bg light-mode-text pt-20">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-white">
            {dict.legal?.cookies || "Cookie Policy"}
          </h1>

          <p className="text-zinc-700 dark:text-zinc-300 mb-4">Last updated: March 15, 2023</p>

          <p className="text-zinc-700 dark:text-zinc-300 mb-8">
            This Cookie Policy explains how StreamFlix ("we", "our", or "us") uses cookies and similar technologies to
            recognize you when you visit our website. It explains what these technologies are and why we use them, as
            well as your rights to control our use of them.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">1. What Are Cookies?</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                Cookies are small data files that are placed on your computer or mobile device when you visit a website.
                Cookies are widely used by website owners in order to make their websites work, or to work more
                efficiently, as well as to provide reporting information.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                Cookies set by the website owner (in this case, StreamFlix) are called "first-party cookies". Cookies
                set by parties other than the website owner are called "third-party cookies". Third-party cookies enable
                third-party features or functionality to be provided on or through the website (e.g., advertising,
                interactive content, and analytics).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">2. Why Do We Use Cookies?</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                We use first-party and third-party cookies for several reasons. Some cookies are required for technical
                reasons in order for our website to operate, and we refer to these as "essential" or "strictly
                necessary" cookies. Other cookies also enable us to track and target the interests of our users to
                enhance the experience on our website.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                Third parties serve cookies through our website for advertising, analytics, and other purposes. This is
                described in more detail below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">3. Types of Cookies We Use</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                The specific types of first and third-party cookies served through our website and the purposes they
                perform are described below:
              </p>
              <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 mb-3 space-y-2">
                <li>
                  <strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with services
                  available through our website and to use some of its features, such as access to secure areas.
                </li>
                <li>
                  <strong>Performance and Functionality Cookies:</strong> These cookies are used to enhance the
                  performance and functionality of our website but are non-essential to their use. However, without
                  these cookies, certain functionality may become unavailable.
                </li>
                <li>
                  <strong>Analytics and Customization Cookies:</strong> These cookies collect information that is used
                  either in aggregate form to help us understand how our website is being used or how effective our
                  marketing campaigns are, or to help us customize our website for you.
                </li>
                <li>
                  <strong>Advertising Cookies:</strong> These cookies are used to make advertising messages more
                  relevant to you. They perform functions like preventing the same ad from continuously reappearing,
                  ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on
                  your interests.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">4. How Can You Control Cookies?</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie
                preferences by clicking on the appropriate opt-out links provided in the cookie banner on our website.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject
                cookies, you may still use our website though your access to some functionality and areas of our website
                may be restricted.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Suspense>
  )
}

