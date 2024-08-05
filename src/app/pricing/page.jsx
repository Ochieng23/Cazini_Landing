import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    id: "tier-starter",
    href: "#",
    price: { monthly: "KES 25,000", annually: "$200" },
    description: "Recruiting 2-10 staff annually",
    features: ["Basic features included"],
  },
  {
    name: "Medium",
    id: "tier-medium",
    href: "#",
    price: { monthly: "KES 60,000", annually: "KES 480" },
    description: "Recruiting 10-60 staff annually",
    features: ["Advanced features included"],
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    price: { monthly: "KES 100,000", annually: "$800" },
    description: "Recruiting 70-100 staff annually",
    features: ["Comprehensive features included"],
  },
  {
    name: "Growth",
    id: "tier-growth",
    href: "#",
    price: { monthly: "Contact Sales", annually: "$2000*" },
    description: "Recruiting 100+ staff annually",
    features: ["Premium features included"],
  },
];

export default function Example() {
  return (
    <>
      <Header />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-800">
              Pricing
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Choose the right plan for you
            </p>
          </div>

          <div className="mt-20 flex justify-center">
            <div className="grid grid-cols-1 gap-y-16 gap-x-4 divide-y divide-gray-100 sm:max-w-xl lg:max-w-4xl lg:grid-cols-3 lg:divide-y-0 lg:divide-x">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className="flex flex-col items-center justify-center bg-slate-200 p-8 rounded-lg"
                >
                  <h3
                    id={tier.id}
                    className="text-2xl font-bold leading-7 text-gray-900"
                  >
                    {tier.name}
                  </h3>
                  <p className="mt-6 flex items-baseline text-5xl font-bold text-gray-900">
                    {tier.price.monthly}
                  </p>
                  <span className="text-sm font-semibold leading-6 text-gray-600">
                    /year
                  </span>
                  <Link
                    href="/demo"
                    aria-describedby={tier.id}
                    className="mt-10 block w-full rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Buy plan
                  </Link>
                  <p className="mt-10 text-center text-sm font-semibold leading-6 text-gray-900">
                    {tier.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
