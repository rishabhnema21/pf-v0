import { FaQuoteLeft } from "react-icons/fa6";

const Quote = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row justify-between md:items-end tracking-wider">
        <div className="">
          <FaQuoteLeft className="h-12 text-zinc-600 dark:text-zinc-500 text-3xl opacity-50"/>
          <blockquote className="px-4  rounded-xl">
            <p className="font-semibold text-zinc-600 text-xl dark:text-zinc-200">Ā no bhadrāḥ kratavo yantu viśvataḥ</p>
            <p className="font-medium text-zinc-600 dark:text-zinc-200">Let noble thoughts come to us from all directions.</p>
          </blockquote>

        </div>

        <div>
            <div className="text-end px-2">
                <p className="font-semibold text-zinc-600 text-xl dark:text-zinc-400 opacity-50">&mdash;Rig Veda</p>
            <p className="font-medium text-zinc-600 dark:text-zinc-400 opacity-50">1.89.1</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
