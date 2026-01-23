
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GithubContribution from "@/components/GithubContribution";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Quote from "@/components/Quote";
import Skills from "@/components/Skills";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div className="flex selection:bg-zinc-700 overflow-x-hidden selection:text-zinc-300 dark:selection:bg-zinc-300 dark:selection:text-zinc-700 min-h-screen items-center justify-center bg-[#F8F8F8] font-sans dark:bg-[#181818]">
      <div className="flex min-h-screen w-full max-w-3xl flex-col items-center py-8 px-5 md:px-16 bg-[#F8F8F8] dark:bg-[#181818] sm:items-start">
        <header className="mb-14 w-full">
          <Navbar />
        </header>

        <main className="w-full flex flex-col space-y-12">
          <Hero />
          <About />
          <Skills />
          <GithubContribution />
          <Work />
          <Contact />
          <Quote />
          <Footer />
        </main>

      </div>
    </div>
  );
}
