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

function CheckIcon({ color = "#6366F1" }: { color?: string }) {
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
        fill={color}
      />
    </svg>
  );
}

export default function Pricing() {
  return (
    <div className="flex flex-wrap items-stretch justify-center gap-6 px-4 py-12 max-w-6xl mx-auto">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`w-full sm:w-72 relative text-center border rounded-lg p-6 ${
            plan.highlighted
              ? "bg-indigo-500 text-white border-gray-500/30 pb-14"
              : "bg-white text-gray-800/80 border-gray-200 pb-16"
          }`}
        >
          {plan.badge && (
            <p className="absolute px-3 text-sm -top-3.5 left-3.5 py-1 bg-[#8789FB] rounded-full">
              {plan.badge}
            </p>
          )}

          <p className={`font-semibold ${plan.badge ? "pt-2" : ""}`}>
            {plan.name}
          </p>

          <h1 className="text-3xl font-semibold">
            ${plan.price}
            <span
              className={`text-sm font-normal ${
                plan.highlighted ? "" : "text-gray-500"
              }`}
            >
              /month
            </span>
          </h1>

          <ul
            className={`list-none text-sm mt-6 space-y-1 ${
              plan.highlighted ? "text-white" : "text-gray-500"
            }`}
          >
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <CheckIcon color={plan.highlighted ? "currentColor" : "#6366F1"} />
                <p>{feature}</p>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className={`text-sm w-full py-2 rounded font-medium mt-7 transition-all ${
              plan.highlighted
                ? "bg-white text-indigo-500 hover:bg-gray-200"
                : "bg-indigo-500 text-white hover:bg-indigo-600"
            }`}
          >
            Get Started
          </button>
        </div>
      ))}
    </div>
  );
}