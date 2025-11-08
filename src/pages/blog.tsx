import HeroBackground from "@/components/backgrounds/herobackground"
import { ArrowRight } from "lucide-react"
import { LastSection } from "@/reusablePages/lastSection"
export default function Blog() {
  const posts = [
    {
      category: "MANAGEMENT",
      title: "5 Ways AI is revolutionising Vendor Management",
      href: "",
      image: "https://img.freepik.com/free-photo/management-coaching-business-dealing-mentor-concept_53876-133858.jpg?semt=ais_hybrid&w=740&q=80", 
    },
    {
      category: "OPTIMISATION",
      title: "Optimizing Vendor Performance: Best Practices & Strategies",
      href: "",
      image: "https://miro.medium.com/v2/resize:fit:875/0*JEhkuFWNkJtQAtvo", 
    },
    {
      category: "TRENDS",
      title: "The Future of Vendor Management: Trends to Watch in 2024",
      href: "",
      image: "https://www.shutterstock.com/image-photo/growth-strategy-busines-trend-concept-600nw-2437688103.jpg", 
    },
    {
      category: "MANAGEMENT",
      title: "Leveraging Historical Data for Better Vendor Management",
      href: "",
      image: "https://img.freepik.com/free-photo/management-coaching-business-dealing-mentor-concept_53876-133858.jpg?semt=ais_hybrid&w=740&q=80", 
    },
    {
      category: "AUTOMATION",
      title: "The Role of Automated Reporting in Modern Vendor Management",
      href: "",
      image: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdkYmyKaleytNtNhEHDGhqmWHBgSpKuOAQaOBhgCtL_ALbQm9R6Wmf_ulbygAy2oPgDAgOxdBpPJxIgr6TSbgfKeot_6LTbmaHqPtPeNnRhb2NwZlH56dfqzvox6JgKtZF46rZWV98JhL8q7f-h8JZ-03PeH--n1Ej5GZ4N3oXe-NiYwe4lltU?key=RHleTOaixownb6WpIskXTA", 
    },
  ]

  return (
    <HeroBackground>
      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28 lg:px-8 text-white">
        <div className="text-center">
          <div className="border bg-white/7 border-slate-200/25 backdrop-blur-md rounded-[9px] mb-10 max-w-fit mx-auto ">
              <h3 className="inline-flex items-center text-center   px-4 py-1   tracking-[0.1em] text-slate-300">
                BLOGS
              </h3>
            </div>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Learn more about our business
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-400 sm:text-base">
            No matter what project you’re working on, we’ve got you covered with the best wireframe
            kits for any platform.
          </p>
        </div>

        <div className="mt-25 mb-45 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {posts.map((post, i) => (
            <article
              key={i}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] shadow-lg shadow-slate-500/5 overflow-hidden hover:shadow-slate-500/12 transition-shadow"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
               
              </div>

              <div className="p-3 ">
                <span className="inline-flex rounded-[6px] border mb-4 border-white/10 bg-white/5 px-2 py-0.5 text-[10px] tracking-[0.18em] text-slate-300">
                  {post.category}
                </span>
                <h3 className="text-md  leading-snug text-white">
                  {post.title}
                </h3>

                <a
                  href={post.href}
                  className="mt-3 inline-flex items-center gap-2 text-[13px] font-medium text-violet-400 hover:text-white"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <LastSection />
      </section>
    </HeroBackground>
  )
}

export { Blog }