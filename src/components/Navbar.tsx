"use client"

import { ThemeToggleButton } from "@/components/ui/skiper-ui/skiper26";

const Navbar = () => {

    const navbarLinks: string[] = ["work", "connect"];

    const handleNavbarLinks = (item: string) => {
        const el = document.getElementById(item);
        if (el) {
            el.scrollIntoView({behavior: "smooth", block: "start"})
        }
    }

  return (
    <nav className="bg-transparent flex justify-between items-center tracking-wider w-full py-3">
        <div>
            <h2 className="text-zinc-800 dark:text-zinc-200 font-ubuntu font-extralight text-xl">rishabh.</h2>
        </div>
        <div className="text-zinc-600 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-150 ease-in  flex justify-center items-center space-x-7">
            {navbarLinks.map((item, index) => (
                <h4 key={index} onClick={() => handleNavbarLinks(item)} className="cursor-pointer">{item}</h4>
            ))}
        </div>
        <div className="h-8 w-8">
            <ThemeToggleButton className="h-full w-full" variant="rectangle" start="top-down" />
        </div>
    </nav>
  )
}

export default Navbar