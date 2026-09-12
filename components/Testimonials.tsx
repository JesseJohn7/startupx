type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "Radiant made undercutting all of our competitors an absolute breeze.",
    name: "Richard Nelson",
    role: "CTO, Slack",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
  },
  {
    quote: "This platform helped us launch our product twice as fast as expected.",
    name: "Ava Johnson",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
  },
  {
    quote: "Incredible support and a fantastic experience from start to finish.",
    name: "Liam Carter",
    role: "CEO, BrightTech",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
  },
  {
    quote: "Our team's productivity skyrocketed after switching to this solution.",
    name: "Sophia Lee",
    role: "Engineering Lead",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
  },
  {
    quote: "A seamless integration that saved us countless developer hours.",
    name: "Noah Patel",
    role: "CTO, DevWorks",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
  },
  {
    quote: "The user experience is outstanding and setup was a breeze.",
    name: "Oliver Brooks",
    role: "Marketing Director",
    image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png",
  },
];

function VerifiedBadge() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.6943 0.900204C5.51166 1.05585 5.42033 1.13369 5.3228 1.19906C5.09922 1.34891 4.84813 1.45291 4.58408 1.50504C4.46888 1.52779 4.34927 1.53733 4.11006 1.55642C3.50903 1.60439 3.2085 1.62836 2.95778 1.71692C2.37788 1.92175 1.92175 2.37788 1.71692 2.95778C1.62836 3.2085 1.60439 3.50903 1.55642 4.11006C1.53733 4.34927 1.52779 4.46888 1.50504 4.58408C1.45291 4.84813 1.34891 5.09922 1.19906 5.3228C1.13369 5.42033 1.05586 5.51165 0.900204 5.6943C0.509124 6.15323 0.313577 6.38265 0.198917 6.62258C-0.0663056 7.1775 -0.0663056 7.8225 0.198917 8.37743C0.313584 8.61735 0.509124 8.84678 0.900204 9.3057C1.05584 9.48833 1.13369 9.57968 1.19906 9.67718C1.34891 9.90075 1.45291 10.1519 1.50504 10.4159C1.52779 10.5311 1.53733 10.6508 1.55642 10.8899C1.60439 11.491 1.62836 11.7915 1.71692 12.0422C1.92175 12.6221 2.37788 13.0783 2.95778 13.2831C3.2085 13.3716 3.50903 13.3956 4.11006 13.4436C4.34927 13.4627 4.46888 13.4722 4.58408 13.495C4.84813 13.5471 5.09922 13.6511 5.3228 13.801C5.42033 13.8663 5.51165 13.9441 5.6943 14.0998C6.15323 14.4909 6.38265 14.6864 6.62258 14.8011C7.1775 15.0663 7.8225 15.0663 8.37743 14.8011C8.61735 14.6864 8.84678 14.4909 9.3057 14.0998C9.48833 13.9441 9.57968 13.8663 9.67718 13.801C9.90075 13.6511 10.1519 13.5471 10.4159 13.495C10.5311 13.4722 10.6508 13.4627 10.8899 13.4436C11.491 13.3956 11.7915 13.3716 12.0422 13.2831C12.6221 13.0783 13.0783 12.6221 13.2831 12.0422C13.3716 11.7915 13.3956 11.491 13.4436 10.8899C13.4627 10.6508 13.4722 10.5311 13.495 10.4159C13.5471 10.1519 13.6511 9.90075 13.801 9.67718C13.8663 9.57968 13.9441 9.48833 14.0998 9.3057C14.4909 8.84678 14.6864 8.61735 14.8011 8.37743C15.0663 7.8225 15.0663 7.1775 14.8011 6.62258C14.6864 6.38265 14.4909 6.15323 14.0998 5.6943C13.9441 5.51165 13.8663 5.42033 13.801 5.3228C13.6511 5.09922 13.5471 4.84813 13.495 4.58408C13.4722 4.46888 13.4627 4.34927 13.4436 4.11006C13.3956 3.50903 13.3716 3.2085 13.2831 2.95778C13.0783 2.37788 12.6221 1.92175 12.0422 1.71692C11.7915 1.62836 11.491 1.60439 10.8899 1.55642C10.6508 1.53733 10.5311 1.52779 10.4159 1.50504C10.1519 1.45291 9.90075 1.34891 9.67718 1.19906C9.57968 1.13369 9.48833 1.05586 9.3057 0.900204C8.84678 0.509124 8.61735 0.313584 8.37743 0.198917C7.8225 -0.0663056 7.1775 -0.0663056 6.62258 0.198917C6.38265 0.313577 6.15323 0.509124 5.6943 0.900204ZM10.7801 5.89736C11.0185 5.65898 11.0185 5.2725 10.7801 5.03412C10.5418 4.79575 10.1552 4.79575 9.91688 5.03412L6.27923 8.6718L5.0831 7.4757C4.84472 7.23735 4.45824 7.23735 4.21987 7.4757C3.9815 7.71405 3.9815 8.10053 4.21987 8.33895L5.84759 9.96668C6.08595 10.205 6.47243 10.205 6.71085 9.96668L10.7801 5.89736Z"
        fill="#2196F3"
      />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-white w-full px-6 md:px-16 lg:px-24 py-16 sm:py-20 text-sm">
      <div className="flex flex-col items-start max-w-6xl mx-auto">
      <div className="flex items-center mr-auto gap-2 text-indigo-600 bg-indigo-50 rounded-full px-3 py-1">
        <span>Testimonials</span>
      </div>

      <h2 className="text-3xl font-medium bg-gradient-to-r from-slate-800 to-slate-500 text-transparent bg-clip-text mt-4">
        Don&apos;t just take our words
      </h2>

      <p className="text-slate-500 mt-4 max-w-2xl">
        Hear what our users say about us. We&apos;re always looking for ways
        to improve. If you have a positive experience with us, leave a
        review.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="border border-slate-200 p-6 rounded-lg hover:-translate-y-1 hover:shadow-xl hover:border-transparent transition duration-500 bg-white"
          >
            <p className="text-base text-slate-500">{t.quote}</p>
            <div className="flex items-center gap-3 mt-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={t.image}
                alt={t.name}
                className="size-12 rounded-full object-cover"
              />
              <div>
                <h3 className="flex items-center gap-2 text-base text-gray-900 font-medium">
                  {t.name}
                  <VerifiedBadge />
                </h3>
                <p className="text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}