import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { getDictionary } from "@/lib/dictionary"

function TermsLoading() {
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

export default async function TermsPage({
  params: { lang = "en" },
}: {
  params: { lang?: string }
}) {
  const dict = await getDictionary(lang || "en")

  return (
    <Suspense fallback={<TermsLoading />}>
      <div className="min-h-screen light-mode-bg light-mode-text pt-20">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-white">
            {dict.legal?.terms || "Terms of Service"}
          </h1>

          <p className="text-zinc-700 dark:text-zinc-300 mb-4">Last updated: March 15, 2023</p>

          <p className="text-zinc-700 dark:text-zinc-300 mb-8">
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the StreamFlix
            website and service.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">1. Acceptance of Terms</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part
                of the terms, you may not access the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">2. Subscription and Billing</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                StreamFlix offers various subscription plans. You will be billed in advance on a recurring basis,
                depending on the type of subscription plan you select.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                You can cancel your subscription at any time, and your service will continue until the end of your
                current billing period.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">3. Content Usage Rights</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                All content provided on StreamFlix is owned by or licensed to us and is subject to copyright and other
                intellectual property rights under the law.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                You may not distribute, modify, transmit, reuse, download, repost, copy, or use said content, whether in
                whole or in part, for commercial purposes or for personal gain, without express advance written
                permission from us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">4. User Accounts</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                When you create an account with us, you must provide information that is accurate, complete, and current
                at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate
                termination of your account on our service.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                You are responsible for safeguarding the password that you use to access the service and for any
                activities or actions under your password.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">5. Termination</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason
                whatsoever, including without limitation if you breach the Terms.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                Upon termination, your right to use the service will immediately cease. If you wish to terminate your
                account, you may simply discontinue using the service.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Suspense>
  )
}

