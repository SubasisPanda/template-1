
import { Star } from "lucide-react";

function TonyStark() {
  return (
   
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-fuchsia-500/5 backdrop-blur sm:p-10 hover:scale-[1.01]  transition-transform">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <div className="mb-4 flex items-center gap-1 text-violet-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <blockquote className="text-balance text-xl font-medium leading-relaxed text-white sm:text-xl">
                AI has revolutionized the way we manage our vendors. The
                real-time insights and automated reports have saved us countless
                hours.
              </blockquote>

              <div className="mt-6 space-y-1">
                <a
                  href="#"
                  className="text-sm font-semibold text-fuchsia-400 hover:underline"
                >
                  Tony Stark
                </a>
                <p className="text-sm text-slate-400">
                  CEO and CTO of Stark Industries
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-fuchsia-500/20" />
                <span className="text-sm font-medium text-slate-200">
                  Stark Industries
                </span>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                <img
                  src="https://i.pinimg.com/originals/ef/0d/ec/ef0dec7cb8b80b65ae925ccb9286f567.jpg" /* replace with your image path */
                  alt="Customer portrait"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
  );
}
export default TonyStark;