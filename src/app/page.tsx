
import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen overflow-hidden items-center justify-center bg-[#F8F8F8] font-sans dark:bg-[#181818]">
      <div className="flex min-h-screen w-full max-w-3xl flex-col items-center py-8 px-5 md:px-16 bg-[#F8F8F8] dark:bg-[#181818] sm:items-start">
        <header className="mb-14 w-full">
          <Navbar />
        </header>

        <main className="w-full flex flex-col space-y-12">
          <Hero />
          <About />
        </main>

      </div>
    </div>
  );
}
