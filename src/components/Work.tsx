import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const workCard = [
  {
    title: "the Maharajas",
    src: "/project01.jpeg",
    liveLink: "https://the-maharajas.vercel.app",
    sourceLink: "https://github.com/rishabhnema21/the-maharajas",
    description:
      "A curated interactive timeline and visual experience celebrating several major historical empires.",
    tech: ["react", "tailwind", "imagekit"],
  },

  {
    title: "Unsaid",
    src: "/project02.png",
    liveLink: "https://sayunsaid.vercel.app/",
    sourceLink: "https://github.com/rishabhnema21/unsaid",
    description:
      "Anonymous messaging platform where users send receive messages without revealing identity",
    tech: ["Next.js", "tailwind", "imagekit"],
  },

];

const Work = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col tracking-wider">
        <h2 className="text-zinc-600 mb-5 dark:text-zinc-200 text-2xl font-[pf-font]">
          Work
        </h2>

        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3">
            {workCard.map((Work, index) => (
              <div className="w-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-150 ease-in cursor-pointer p-3 rounded-xl flex flex-col items-center">
                <img className="rounded-lg" src={Work.src} alt="project 1" />
                <div>
                  <h3 className="text-zinc-600 mt-2 font-semibold dark:text-zinc-200 text-xl">
                    {Work.title}
                  </h3>
                  <p className="mt-2 text-zinc-700 text-sm dark:text-zinc-300">
                    {Work.description}
                  </p>
                  <div className="flex mt-1 space-x-2">
                    <Link
                      href={Work.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-zinc-700 dark:bg-zinc-300 font-semibold text-sm cursor-pointer text-zinc-300 hover:bg-zinc-800 dark:hover:bg-zinc-400 transition-all duration-150 ease-in dark:text-zinc-800 px-3 py-0.5 rounded inline-flex items-center gap-2">
                        Live <FiExternalLink />
                      </button>
                    </Link>

                    <Link
                      href={Work.sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-zinc-700 dark:bg-zinc-300 font-semibold text-sm cursor-pointer text-zinc-300 hover:bg-zinc-800 dark:hover:bg-zinc-400 transition-all duration-150 ease-in dark:text-zinc-800 px-3 py-0.5 rounded inline-flex items-center gap-2">
                        Source <FaGithub />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
