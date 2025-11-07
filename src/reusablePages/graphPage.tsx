function GraphPage() {
  return (
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
  );
}
export default GraphPage;