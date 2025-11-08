import { BarChart3, Database, Plane } from "lucide-react";


function FeaturesPage() {
  const features = [
    {
      icon: <Plane className="h-6 w-6 text-violet-400" />,
      title: "AI-Powered Insights",
      description:
        "Upload data effortlessly. Our platform handles transactions, behavior, and trends.",
    },
    {
      icon: <Database className="h-6 w-6 text-violet-400" />,
      title: "Real-Time Dashboards",
      description:
        "Upload data effortlessly. Our platform handles transactions, behavior, and trends.",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-violet-400" />,
      title: "Automated Reporting",
      description:
        "Upload data effortlessly. Our platform handles transactions, behavior, and trends.",
    },
  ];
  return (
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-start px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="border bg-violet-400/10 backdrop-blur-md border-white/10 rounded-[4px] mb-10  ">
              <h4 className="inline-flex items-center text-center  px-4 py-1   tracking-[0.1em] text-slate-300">
                FEATURE
              </h4>
            </div>
        <h1 className="text-xl  text-white">Explore our features</h1>
        <p className="mt-4 text-sm text-slate-400">
          Discover the powerful features that make our platform unique.
        </p>
        <div className="relative mt-25 mx-auto flex max-w-6xl flex-col items-center  overflow-hidden justify-start   ">
          <img
            src="/dashboardImage.png"
            alt=""
            className="w-full h-auto rounded-2xl "
          />
          <div className="absolute inset-x-0 bottom-0 h-40 backdrop-blur-[1px] bg-gradient-to-b from-transparent via-black-50 to-black"></div>
        </div>
        <div className="max-w-6xl mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group flex flex-col items-center justify-center rounded-2xl border border-white/10  p-8 text-center transition-all duration-300 hover:border-fuchsia-200/30 hover:bg-white/[0.01]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-transparent group-hover:bg-violet-300/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg  text-white">
                {feature.title}
              </h3>
              <p className="mt-4 text-sm text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
  );
}
export { FeaturesPage };