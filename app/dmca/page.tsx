import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { getDictionary } from "@/lib/dictionary"

function DmcaLoading() {
  return (
    <div className="min-h-screen light-mode-bg light-mode-text pt-20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Skeleton className="h-10 w-64 mb-6 bg-zinc-200 dark:bg-zinc-800" />
        <Skeleton className="h-5 w-full mb-4 bg-zinc-200 dark:bg-zinc-800" />
        <Skeleton className="h-5 w-full mb-4 bg-zinc-200 dark:bg-zinc-800" />
        <Skeleton className="h-5 w-3/4 mb-8 bg-zinc-200 dark:bg-zinc-800" />

        {[1, 2, 3].map((section) => (
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

export default async function DmcaPage({
  params: { lang = "en" },
}: {
  params: { lang?: string }
}) {
  const dict = await getDictionary(lang || "en")

  return (
    <Suspense fallback={<DmcaLoading />}>
      <div className="min-h-screen light-mode-bg light-mode-text pt-20">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-white">{dict.legal?.dmca || "DMCA Policy"}</h1>

          <p className="text-zinc-700 dark:text-zinc-300 mb-4">Last updated: March 15, 2023</p>

          <p className="text-zinc-700 dark:text-zinc-300 mb-8">
            StreamFlix respects the intellectual property rights of others and expects its users to do the same. In
            accordance with the Digital Millennium Copyright Act of 1998 ("DMCA"), we will respond expeditiously to
            claims of copyright infringement that are reported to our designated copyright agent.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">
                1. Notification of Claimed Infringement
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                If you believe that your copyrighted work has been copied in a way that constitutes copyright
                infringement and is accessible on our service, please notify our copyright agent as set forth in the
                DMCA. For your complaint to be valid under the DMCA, you must provide the following information in
                writing:
              </p>
              <ol className="list-decimal pl-5 text-zinc-700 dark:text-zinc-300 mb-3 space-y-2">
                <li>
                  An electronic or physical signature of a person authorized to act on behalf of the copyright owner;
                </li>
                <li>Identification of the copyrighted work that you claim has been infringed;</li>
                <li>
                  Identification of the material that is claimed to be infringing and where it is located on the
                  service;
                </li>
                <li>
                  Information reasonably sufficient to permit us to contact you, such as your address, telephone number,
                  and email address;
                </li>
                <li>
                  A statement that you have a good faith belief that use of the material in the manner complained of is
                  not authorized by the copyright owner, its agent, or law; and
                </li>
                <li>
                  A statement, made under penalty of perjury, that the above information is accurate, and that you are
                  the copyright owner or are authorized to act on behalf of the owner.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">2. Counter-Notification</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                If you believe that your content that was removed (or to which access was disabled) is not infringing,
                or that you have the authorization from the copyright owner, the copyright owner's agent, or pursuant to
                the law, to post and use the material in your content, you may send a counter-notification to our
                copyright agent containing the following information:
              </p>
              <ol className="list-decimal pl-5 text-zinc-700 dark:text-zinc-300 mb-3 space-y-2">
                <li>Your physical or electronic signature;</li>
                <li>
                  Identification of the content that has been removed or to which access has been disabled and the
                  location at which the content appeared before it was removed or disabled;
                </li>
                <li>
                  A statement that you have a good faith belief that the content was removed or disabled as a result of
                  mistake or a misidentification of the content; and
                </li>
                <li>
                  Your name, address, telephone number, and email address, a statement that you consent to the
                  jurisdiction of the federal court in [Your Jurisdiction], and a statement that you will accept service
                  of process from the person who provided notification of the alleged infringement.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-white">3. Contact Information</h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-3">
                Please send all DMCA notices to our designated copyright agent at:
              </p>
              <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-md text-zinc-700 dark:text-zinc-300">
                <p>DMCA Agent</p>
                <p>StreamFlix Legal Department</p>
                <p>123 Streaming Street</p>
                <p>Digital City, DC 10101</p>
                <p>Email: dmca@streamflix.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Suspense>
  )
}

