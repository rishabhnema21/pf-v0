import { FaGithub, FaLinkedin, FaTelegram  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";

const About = () => {

    const socialLinks = [
        {name: "Github", link: "https://github.com/rishabhnema21", icon: <FaGithub />},
        {name: "Linkedin", link: "https://linkedin.com/in/rishabhnema21", icon: <FaLinkedin />},
        {name: "X (Twitter)", link: "https://x.com/itzrishxbh", icon: <FaXTwitter />},
        {name: "Instagram", link: "https://instagram.com/rishabhnema05", icon: <CiInstagram />},
        {name: "Telegram", link: "https://t.me/rishabhnema21", icon: <FaTelegram />}
    ]

  return (
    <section className="w-full flex justify-between items-center">
        <div className="flex flex-col tracking-wider">
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">I’m a <span className="text-zinc-800 dark:text-zinc-200 text-xl font-[pf-font]">full-stack developer</span> who builds reliable web applications end-to-end — from concept to production. Passionate about creating innovative web solutions that truly matter and enhancing user experiences across the stack.</p>

            <div className="mt-4">
                <button className="bg-zinc-700 dark:bg-zinc-300 font-semibold text-sm cursor-pointer text-zinc-300 hover:bg-zinc-800 dark:hover:bg-zinc-400 transition-all duration-150 ease-in dark:text-zinc-800 px-3 py-1 rounded">
                    Resume
                </button>
            </div>

            <div className="mt-4">
                <ul className="flex gap-2 flex-wrap">
                    {socialLinks.map((link, index) => (
                        <li key={index}>
                            <a className="border inline-flex border-dashed border-zinc-500 text-zinc-300 rounded py-1 px-3 text-sm gap-2 items-center hover:bg-zinc-700 transition-all duration-150 ease-in" href={link.link}> {link.icon} {link.name} </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default About