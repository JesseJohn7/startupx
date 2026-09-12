import {
  Hospital,
  Shirt,
  ShoppingCart,
  Package,
  Wallet,
  GraduationCap,
  Users,
  Calculator,
  UserCog,
  Store,
  CreditCard,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

type App = {
  name: string;
  icon: LucideIcon;
};

const apps: App[] = [
  { name: "Hospital Management", icon: Hospital },
  { name: "Laundry Management", icon: Shirt },
  { name: "POS", icon: ShoppingCart },
  { name: "Inventory", icon: Package },
  { name: "Payroll", icon: Wallet },
  { name: "School Management", icon: GraduationCap },
  { name: "CRM", icon: Users },
  { name: "Accounting", icon: Calculator },
  { name: "HR", icon: UserCog },
  { name: "E-commerce", icon: Store },
  { name: "Payments", icon: CreditCard },
  { name: "Analytics", icon: BarChart3 },
];

const stats = [
  { value: "10+", label: "Integrated applications", sub: "On-demand activation" },
  { value: "24/7", label: "System uptime", sub: "Always available" },
  { value: "3 min", label: "Time to deploy", sub: "No installation" },
  { value: "0", label: "To get started", sub: "Free trial plan" },
];

export default function Applications() {
  return (
    <section className="bg-white w-full overflow-x-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow + heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-indigo-600 text-sm font-semibold tracking-wide uppercase mb-3">
            Applications
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
            A complete suite simple to start with.
          </h2>
          <p className="mt-4 text-gray-500 text-sm sm:text-base leading-relaxed">
            Hospital, school, POS, inventory and payroll management first 
            the rest follows as you grow.
          </p>
        </div>

        {/* App grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
          {apps.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="group flex flex-col items-center justify-center text-center gap-3 border border-gray-200 rounded-xl px-4 py-6 hover:border-indigo-500 hover:shadow-md transition-all cursor-pointer bg-white"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Icon size={22} strokeWidth={1.75} />
              </span>
              <p className="text-sm font-medium text-gray-800">{name}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <button
            type="button"
            className="text-indigo-600 border border-indigo-600 text-sm font-medium px-6 py-2.5 rounded-full hover:bg-indigo-50 transition"
          >
            See more
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-gray-200">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-semibold text-gray-900">
                {stat.value}
              </p>
              <p className="text-sm font-medium text-gray-800 mt-1">
                {stat.label}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}