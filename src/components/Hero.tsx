

const Hero = () => {
  return (
    <section className="w-full flex justify-between items-center">
        <div className="flex flex-col tracking-wider">
            <h1 className="text-zinc-600 dark:text-zinc-200 text-3xl">Hi, I'm <span className=" text-zinc-800 dark:text-zinc-200 text-5xl font-[pf-font]">Rishabh Nema.</span></h1>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">Building &#x2022; Writing &#x2022; Expressing</p>
        </div>

        <div className="">
            <img className="w-22 h-22 max-sm:hidden rounded-full border border-zinc-500" src="/thisisme.png" alt="logo" />
        </div>
        
    </section>
  )
}

export default Hero