import HeroBackground from "@/components/backgrounds/herobackground";
import { Database, BarChart3, Plane, Github, Slack, Zap } from "lucide-react";

function Features() {
  const features = [
    {
      icon: <Plane className="h-6 w-6 text-fuchsia-400" />,
      title: "AI-Powered Insights",
      description:
        "Upload data effortlessly. Our platform handles transactions, behavior, and trends.",
    },
    {
      icon: <Database className="h-6 w-6 text-fuchsia-400" />,
      title: "Real-Time Dashboards",
      description:
        "Upload data effortlessly. Our platform handles transactions, behavior, and trends.",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-fuchsia-400" />,
      title: "Automated Reporting",
      description:
        "Upload data effortlessly. Our platform handles transactions, behavior, and trends.",
    },
  ];
  return (
    <HeroBackground>
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-start px-4 py-20 sm:px-6 md:py-28 lg:px-8">
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
          <div className="absolute inset-x-0 bottom-0 h-50  backdrop-blur-lg [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
        </div>
        <div className="max-w-6xl mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group flex flex-col items-center justify-center rounded-2xl border border-white/10  p-8 text-center transition-all duration-300 hover:border-fuchsia-200/30 hover:bg-white/[0.01]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-fuchsia-500/10 group-hover:bg-violet-300/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-25 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-start px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <h4 className="text-2xl text-white sm:text-5xl md:text-5xl text-center">
            Unlock future of Vendor Management
            <span className="block">with Intelligent Analytics</span>
          </h4>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-slate-400 sm:mt-6 leading-relaxed">
            Empower your business with AI-driven insights, real-time tracking,
            and comprehensive historical data.
          </p>
          <div className="mt-25 grid max-w-6xl gap-6 justify-center sm:grid-cols-1 lg:grid-cols-2 items-center space-evenly mt-10 ">
            <div className="col-span-1 border border-slate-300/20 rounded-2xl p-6 flex flex-col items-start bg-white/[0.01] hover:bg-white/[0.03] transition-all">
              <img
                src="/Astra0.png"
                alt=""
                className="rounded-2xl border border-transparent"
              />
              <h6 className="text-md font-medium text-white mt-3">
                Customizable Dashboards
              </h6>
              <p className="mt-2 text-sm text-slate-400">
                Tailor dashboards to your needs with drag-and-drop widgets and
                real-time data visualization.
              </p>
            </div>
            <div className="col-span-1 border border-slate-300/20 rounded-2xl p-6 flex flex-col items-start bg-white/[0.01] hover:bg-white/[0.03] transition-all">
              <img
                src="/Astra1.png"
                alt=""
                className="rounded-2xl border border-transparent"
              />
              <h6 className="text-md font-medium text-white mt-3">
                Automated Reporting
              </h6>
              <p className="mt-2 text-sm text-slate-400">
                Generate reports automatically with customizable templates and
                scheduling options.
              </p>
            </div>
            <div className="col-span-1 border border-slate-300/20 rounded-2xl p-6 flex flex-col items-start  bg-white/[0.01] hover:bg-white/[0.03] transition-all">
              <img
                src="/Astra2.png"
                alt=""
                className="rounded-2xl border border-transparent"
              />
              <h6 className="text-md font-medium text-white mt-3">
                Integrations
              </h6>
              <p className="mt-2 text-sm text-slate-400">
                Connect with your favorite tools and platforms for seamless data
                exchange.
              </p>
            </div>
            <div className="col-span-1 border border-slate-300/20  rounded-2xl p-6 flex flex-col items-start bg-white/[0.01] hover:bg-white/[0.03] transition-all">
              <img
                src="/Astra3.png"
                alt=""
                className="rounded-2xl border border-transparent"
              />
              <h6 className="text-md font-medium text-white mt-3">
                Monthly Tracking Graphs
              </h6>
              <p className="mt-2 text-sm text-slate-400">
                Visualize your monthly performance with intuitive graphs and
                analytics.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-start px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <h4 className="text-2xl text-white sm:text-5xl md:text-5xl text-center">
            Integrated with Your Favorite Tools
          </h4>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-slate-400 sm:mt-6 leading-relaxed">
            Discover the simplicity of seamless integration with top platforms.
          </p>

          <div className="max-w-6xl mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group flex flex-col items-center justify-center rounded-2xl border border-white/10  p-8 text-center transition-all duration-300 hover:border-fuchsia-200/30 hover:bg-white/[0.01]">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full   transition-colors">
                <Github className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-white">Github</h3>
              <p className="mt-2 text-sm text-slate-400">
                Connect with thousands of apps for automated workflows.
              </p>
            </div>
            <div className="group flex flex-col items-center justify-center rounded-2xl border border-white/10  p-8 text-center transition-all duration-300 hover:border-fuchsia-200/30 hover:bg-white/[0.01]">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full transition-colors">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-white">Zapier</h3>
              <p className="mt-2 text-sm text-slate-400">
                Connect with thousands of apps for automated workflows.
              </p>
            </div>
            <div className="group flex flex-col items-center justify-center rounded-2xl border border-white/10  p-8 text-center transition-all duration-300 hover:border-fuchsia-200/30 hover:bg-white/[0.01]">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full  transition-colors">
                <Slack className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-white">Slack</h3>
              <p className="mt-2 text-sm text-slate-400">
                Connect with thousands of apps for automated workflows.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 mx-auto flex min-h-screen max-w-7xl border items-center justify-start  sm:px-6 md:py-28 lg:px-8">
          <div className="flex-1 border-r border-slate-300/20 p-6">
            <img src="https://i.pinimg.com/originals/ef/0d/ec/ef0dec7cb8b80b65ae925ccb9286f567.jpg" alt="Feature 1" className="rounded-lg max-w-50" />
            <h4 className="text-lg font-medium text-white">Feature 1</h4>
            <p className="mt-2 text-sm text-slate-400">
              Al has revolutionized the way we manage our vendors. The real-time
              insights and automated reports have saved us countless hours.
            </p>
          </div>
        </div>
      </div>
    </HeroBackground>
  );
}

export default Features;
