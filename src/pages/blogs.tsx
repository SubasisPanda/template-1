import HeroBackground from "@/components/backgrounds/herobackground";
import { ArrowRight } from "lucide-react";
import {SignUp} from "@/reusablePages/signUp";
function Blogs() {
    const posts = [
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
  ];

  return (
    <HeroBackground>
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-start px-4 py-20 sm:px-6 md:py-28 lg:px-8">
              <h3 className="inline-flex items-center text-center border bg-white/7 border-slate-200/25 backdrop-blur-md rounded-[9px]  px-4 py-1   tracking-[0.1em] text-slate-300">
                RELEASE
              </h3>
              <h2 className="text-4xl mt-5 text-white sm:text-5xl md:text-6xl md:leading-[1.1] text-center">
          Optimize vendor performance: 
          <span className="block">Best Practices and Strategies</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-slate-400 sm:mt-6 leading-relaxed">
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="border-1 mb-35 border-transparent flex flex-col mt-10 w-full max-w-7xl p-4 ">
          <img
            src="https://miro.medium.com/v2/resize:fit:875/0*JEhkuFWNkJtQAtvo"
            alt=""
            className="rounded-2xl"
          />
        </div>
        <article className="mt-8 max-w-3xl mb-20 p-6 sm:p-8 md:p-10 shadow-sm shadow-slate-500/5">
          <ol className="space-y-6 [counter-reset:sec]">
            <li className="space-y-5">
              <h2 className="text-4xl font-semibold tracking-wide text-slate-200">
                What is a landing page?
              </h2>
              <p className="text-sm leading-relaxed text-slate-400">
                Whether you work in marketing, sales, or product design, you
                understand the importance of a quality landing page. Landing
                pages are standalone websites used to generate leads or sales-in
                other words they help you increase your revenue. Unlike typical
                web pages, landing pages only have one call to action, or CTA,
                and they are usually tied to a specific marketing or advertising
                campaign. The hyper-focused nature of landing pages means they
                come with a pretty standard set of best practices.
              </p>
            </li>

            <li className="space-y-5">
              <h2 className="text-4xl font-semibold tracking-wide text-slate-200">
                Landing Pages vs. Front Pages
              </h2>
              <p className="text-sm leading-relaxed text-slate-400">
                A typical front page or website in general includes a full
                navigation bar with tons of links throughout the page linking to
                other pages or pieces of content. A good landing page should
                only have one link, or multiple links that all point to the same
                thing. Having one CTA on your landing page increases conversions
                because there's less distraction-fewer equally appealing options
                to prompt your users into leaving your landing page. Your
                brand's front page has totally different goals. It should show
                off your brand's personality, let people explore different
                features, find blogs and support articles, or even apply for a
                job. But they won't necessarily purchase your product from the
                front page. And that's why we need landing pages. Since landing
                pages are tied to specific campaigns, you don't need to worry
                about users lacking information about your product. They arrived
                at your landing page because they were interested in an ad or
                post on Google, Bing, YouTube, Facebook, Instagram, Twitter, or
                similar places on the web. With super detailed campaigns
                pointing to easy-to-use landing pages, you're getting
                high-quality leads that are actually interested in using your
                product.
              </p>
            </li>

            <li className="space-y-5">
              <h2 className="text-4xl font-semibold  text-slate-200">
                Best Practices for creating a landing page
              </h2>
              <p className="text-sm leading-relaxed text-slate-400">
                A typical front page or website in general includes a full
                navigation bar with tons of links throughout the page linking to
                other pages or pieces of content. A good landing page should
                only have one link, or multiple links that all point to the same
                thing. Having one CTA on your landing page increases conversions
                because there's less distraction-fewer equally appealing options
                to prompt your users into leaving your landing page. Your
                brand's front page has totally different goals. It should show
                off your brand's personality, let people explore different
                features, find blogs and support articles, or even apply for a
                job. But they won't necessarily purchase your product from the
                front page. And that's why we need landing pages. Since landing
                pages are tied to specific campaigns, you don't need to worry
                about users lacking information about your product. They arrived
                at your landing page because they were interested in an ad or
                post on Google, Bing, YouTube, Facebook, Instagram, Twitter, or
                similar places on the web. With super detailed campaigns
                pointing to easy-to-use landing pages, you're getting
                high-quality leads that are actually interested in using your
                product.
              </p>
            </li>
          </ol>
        </article>


        <div className="mx-auto max-w-6xl">
            
        <h2 className="text-xl font-semibold text-white sm:text-2xl">Recent Blogs</h2>

        <div className="mt-6 mb-40 grid grid-cols-1 gap-6 md:grid-cols-2">
          {posts.map((p, i) => (
            <article
              key={i}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-lg shadow-slate-500/5 transition-colors hover:border-white/15"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-5">
                <span className="inline-flex rounded-[6px] border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] tracking-[0.18em] text-slate-300">
                  {p.category}
                </span>

                <h3 className="mt-3 text-[15px] font-medium leading-snug text-white">
                  {p.title}
                </h3>

                <a
                  href={p.href}
                  className="mt-4 inline-flex items-center  gap-2 text-sm font-medium text-violet-500 hover:text-white"
                >
                  Learn more
                  <ArrowRight className="h-4 mt-auto w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
      <SignUp />
      </div>
    </HeroBackground>
  );
}
export { Blogs };
