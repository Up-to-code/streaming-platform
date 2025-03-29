import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { getDictionary } from "@/lib/dictionary"

function PrivacyLoading() {
  return (
    <div className="min-h-screen light-mode-bg light-mode-text pt-20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Skeleton className="h-10 w-64 mb-6 bg-zinc-200 dark:bg-zinc-800" />
        <Skeleton className="h-5 w-full mb-4 bg-zinc-200 dark:bg-zinc-800" />
        <Skeleton className="h-5 w-full mb-4 bg-zinc-200 dark:bg-zinc-800" />
        <Skeleton className="h-5 w-3/4 mb-8 bg-zinc-200 dark:bg-zinc-800" />

        {[1, 2, 3, 4, 5].map((section) => (
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

export default async function PrivacyPage({
  params: { lang = "en" },
}: {
  params: { lang?: string }
}) {
  const dict = await getDictionary(lang || "en")

  return (
    <Suspense fallback={<PrivacyLoading />}>
      <div className="min-h-screen light-mode-bg light-mode-text pt-20">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-white">
            {dict.legal?.privacy || "Privacy Policy"}
          </h1>

          <p className="text-zinc-700 dark:text-zinc-300 mb-4">Last updated: March 15, 2023</p>

          <p className="text-zinc-700 dark:text-zinc-300 mb-8">
            StreamFlix ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how
            we collect, use, and share information about you when you use our website and services.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">1. Information We Collect</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                We collect information you provide directly to us, such as when you create an account, update your
                profile, use interactive features, subscribe to a plan, request customer support, or otherwise
                communicate with us.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                We also automatically collect certain information about your device and how you interact with our
                services, including IP address, device type, browser type, operating system, unique device identifiers,
                and browsing and viewing activity.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">2. How We Use Information</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                We use the information we collect to provide, maintain, and improve our services, such as to process
                transactions, send you related information, and personalize your experience.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                We also use the information to communicate with you, respond to your comments and questions, provide
                customer service, and send you technical notices and security alerts.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">3. Sharing of Information</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                We may share information about you as follows or as otherwise described in this Privacy Policy:
              </p>
              <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 mb-3 space-y-2">
                <li>
                  With vendors, consultants, and other service providers who need access to such information to carry
                  out work on our behalf;
                </li>
                <li>
                  In response to a request for information if we believe disclosure is in accordance with any applicable
                  law, regulation, or legal process;
                </li>
                <li>
                  If we believe your actions are inconsistent with our user agreements or policies, or to protect the
                  rights, property, and safety of StreamFlix or others;
                </li>
                <li>
                  In connection with, or during negotiations of, any merger, sale of company assets, financing, or
                  acquisition of all or a portion of our business by another company;
                </li>
                <li>With your consent or at your direction.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">4. Your Choices</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                You can access and update certain information about you from within your account settings. You can also
                request that we delete certain information about you by contacting us.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                You may opt out of receiving promotional communications from us by following the instructions in those
                communications or by updating your email preferences in your account settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">5. Contact Us</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                If you have any questions about this Privacy Policy, please contact us at privacy@streamflix.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Suspense>
  )
}

