"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { useToast } from "@/components/ui/use-toast"
import { Suspense } from "react"
import PlansLoading from "@/components/plans-loading"

export default function PlansPage() {
  return (
    <Suspense fallback={<PlansLoading />}>
      <PlansContent />
    </Suspense>
  )
}

function PlansContent() {
  const { dictionary: dict, language } = useLanguage()
  const { toast } = useToast()
  const isRtl = language === "ar"
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const plans = [
    {
      id: "basic",
      name: dict?.plans?.basic || "Basic",
      price: language === "ar" ? "٩.٩٩" : "9.99",
      currency: language === "ar" ? "دولار/شهر" : "$/month",
      description: dict?.plans?.basicDescription || "Perfect for casual viewers",
      features: [
        { name: dict?.plans?.hdStreaming || "HD Streaming", included: true },
        { name: dict?.plans?.watchOnTwoDevices || "Watch on 2 devices", included: true },
        { name: dict?.plans?.downloadContent || "Download content", included: false },
        { name: dict?.plans?.adFree || "Ad-free experience", included: false },
        { name: dict?.plans?.exclusiveContent || "Exclusive content", included: false },
      ],
      popular: false,
    },
    {
      id: "standard",
      name: dict?.plans?.standard || "Standard",
      price: language === "ar" ? "١٤.٩٩" : "14.99",
      currency: language === "ar" ? "دولار/شهر" : "$/month",
      description: dict?.plans?.standardDescription || "Our most popular plan",
      features: [
        { name: dict?.plans?.fullHdStreaming || "Full HD Streaming", included: true },
        { name: dict?.plans?.watchOnFourDevices || "Watch on 4 devices", included: true },
        { name: dict?.plans?.downloadContent || "Download content", included: true },
        { name: dict?.plans?.adFree || "Ad-free experience", included: true },
        { name: dict?.plans?.exclusiveContent || "Exclusive content", included: false },
      ],
      popular: true,
    },
    {
      id: "premium",
      name: dict?.plans?.premium || "Premium",
      price: language === "ar" ? "١٩.٩٩" : "19.99",
      currency: language === "ar" ? "دولار/شهر" : "$/month",
      description: dict?.plans?.premiumDescription || "Ultimate streaming experience",
      features: [
        { name: dict?.plans?.ultraHdStreaming || "Ultra HD (4K) Streaming", included: true },
        { name: dict?.plans?.watchOnSixDevices || "Watch on 6 devices", included: true },
        { name: dict?.plans?.downloadContent || "Download content", included: true },
        { name: dict?.plans?.adFree || "Ad-free experience", included: true },
        { name: dict?.plans?.exclusiveContent || "Exclusive content", included: true },
      ],
      popular: false,
    },
  ]

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId)
    toast({
      title: dict?.plans?.planSelected || "Plan selected",
      description: dict?.plans?.planSelectedDescription || "You can change your plan anytime",
    })
  }

  return (
    <div className="min-h-screen plans-container plans-text pt-20" dir={isRtl ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 glow-text">{dict?.plans?.title || "Choose Your Plan"}</h1>
          <p className="text-lg max-w-2xl mx-auto plans-text-muted">
            {dict?.plans?.subtitle || "Select the perfect streaming plan that fits your needs"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`plans-card overflow-hidden transition-all duration-300 ${
                selectedPlan === plan.id ? "border-primary ring-2 ring-primary ring-opacity-50" : ""
              } ${plan.popular ? "transform md:-translate-y-4 border-primary" : ""}`}
            >
              {plan.popular && (
                <div className="bg-primary text-white py-1 px-4 text-center text-sm font-medium glow-sm">
                  {dict?.plans?.mostPopular || "Most Popular"}
                </div>
              )}
              <CardHeader>
                <CardTitle className={`plans-text ${plan.popular ? "text-primary" : ""}`}>{plan.name}</CardTitle>
                <div className="flex items-baseline mt-2">
                  <span className="text-3xl font-bold plans-text">{plan.price}</span>
                  <span className="ml-1 text-sm plans-text-muted">{plan.currency}</span>
                </div>
                <CardDescription className="plans-text-muted">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-zinc-500 mr-2 shrink-0" />
                      )}
                      <span className={`plans-text ${feature.included ? "" : "text-zinc-500"}`}>{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => handleSelectPlan(plan.id)}
                  className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90 glow-sm" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {dict?.plans?.selectPlan || "Select Plan"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4 plans-text">{dict?.plans?.faq || "Frequently Asked Questions"}</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-left">
            <div>
              <h3 className="font-bold mb-2 plans-text">{dict?.plans?.faqCancel || "Can I cancel anytime?"}</h3>
              <p className="plans-text-muted">
                {dict?.plans?.faqCancelAnswer ||
                  "Yes, you can cancel your subscription at any time. Your subscription will remain active until the end of your current billing period."}
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2 plans-text">{dict?.plans?.faqChange || "Can I change my plan later?"}</h3>
              <p className="plans-text-muted">
                {dict?.plans?.faqChangeAnswer ||
                  "You can upgrade or downgrade your plan at any time. Changes to your subscription will take effect on your next billing date."}
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2 plans-text">{dict?.plans?.faqDevices || "What devices can I watch on?"}</h3>
              <p className="plans-text-muted">
                {dict?.plans?.faqDevicesAnswer ||
                  "You can watch on any device including smart TVs, smartphones, tablets, streaming media players, and game consoles. The number of devices you can use simultaneously depends on your plan."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

