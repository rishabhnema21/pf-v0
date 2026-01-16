"use client"

import { ThemeToggleButton } from "@/components/ui/skiper-ui/skiper26";

const Navbar = () => {
  return (
    <nav className="bg-transparent flex justify-between items-center w-full py-3">
        <div>
            <h2 className="text-zinc-800 dark:text-zinc-200 font-[pf-font] text-xl">rishabh.</h2>
        </div>
        <div className="text-zinc-600 dark:text-zinc-200  flex justify-center items-center space-x-7">
            <h4>work</h4>
            <h4>connect</h4>
        </div>
        <div className="h-8 w-8">
            <ThemeToggleButton className="h-full w-full" variant="rectangle" start="top-down" />
        </div>
    </nav>
  )
}

export default Navbar