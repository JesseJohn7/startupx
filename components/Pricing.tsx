type Plan = {
  name: string;
  price: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
};

const plans: Plan[] = [
  {
    name: "Basic",
    price: "29",
    features: [
      "Access to all basic courses",
      "Community support",
      "10 practice projects",
      "Course completion certificate",
      "Basic code review",
    ],
  },
  {
    name: "Pro",
    price: "79",
    highlighted: true,
    badge: "Most Popular",
    features: [
      "Access to all Pro courses",
      "Priority community support",
      "30 practice projects",
      "Course completion certificate",
      "Advance code review",
      "1-on-1 mentoring sessions",
      "Job assistance",
    ],
  },
  {
    name: "Enterprise",
    price: "199",
    features: [
      "Access to all courses",
      "Dedicated support",
      "Unlimited projects",
      "Course completion certificate",
      "Premium code review",
      "Weekly 1-on-1 mentoring",
      "Job guarantee",
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
        fill="#ffffff"
      />
    </svg>
  );
}

export default function Pricing() {
  return (
    <div className="bg-white w-full overflow-x-hidden px-4 py-12 sm:py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-indigo-600 text-sm font-semibold tracking-wide uppercase mb-3">
          Pricing
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
          Simple, transparent pricing.
        </h2>
        <p className="mt-4 text-gray-500 text-sm sm:text-base leading-relaxed">
          Start free. Scale when you&apos;re ready. Pick the plan that fits
          your business today.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`w-full max-w-72 mx-auto relative text-center bg-black text-white border rounded-lg p-6 ${
              plan.highlighted
                ? "border-indigo-500 pb-14 shadow-lg ring-1 ring-indigo-500"
                : "border-gray-800 pb-16"
            }`}
          >
            {plan.badge && (
              <p className="absolute px-3 text-sm -top-3.5 left-3.5 py-1 bg-indigo-500 text-white rounded-full">
                {plan.badge}
              </p>
            )}

            <p className={`font-semibold ${plan.badge ? "pt-2" : ""}`}>
              {plan.name}
            </p>

            <h1 className="text-3xl font-semibold">
              ${plan.price}
              <span className="text-sm font-normal text-gray-400">
                /month
              </span>
            </h1>

            <ul className="list-none text-sm mt-6 space-y-1 text-left sm:text-center text-gray-300">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <CheckIcon />
                  <p>{feature}</p>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="text-sm w-full py-2 rounded font-medium mt-7 transition-all bg-white text-black hover:bg-gray-200"
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}