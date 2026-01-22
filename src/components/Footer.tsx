import Timer from "./Timer";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center tracking-wider w-full">
      <div className="flex-col justify-between items-center">
        <p className="text-zinc-600 opacity-70 text-xs md:text-sm dark:text-zinc-300">
          Crafted By{" "}
          <span className="text-zinc-700 dark:text-zinc-200">Rishabh</span>
        </p>
        <p className="text-zinc-600 opacity-70 text-xs md:text-sm dark:text-zinc-200">
          &copy; 2026
        </p>
      </div>

      <div>
        <Timer />
      </div>
    </footer>
  );
};

export default Footer;
