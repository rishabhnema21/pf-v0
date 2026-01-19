"use client";

import { useTheme } from "next-themes";
import { GitHubCalendar } from "react-github-calendar";

const customTheme = {
  light: ["#F0F0F0", "#A8C0FF", "#4C6EF5", "#3450D3", "#1E3A8A"],
  dark: ["#242323", "#606060", "#8C8C8C", "#BABABA", "#EBEBEB"],
};

const GithubContribution = () => {
  const { resolvedTheme } = useTheme();

  return (
    <section className="w-full">
      <div className="flex flex-col tracking-wider">
        <h2 className="text-zinc-600 mb-5 dark:text-zinc-200 text-2xl font-[pf-font]">
          Github Contributions
        </h2>

        <div className="w-full overflow-x-auto overscroll-x-contain touch-pan-x md:no-scrollbar">
          <div className="min-w-max md:no-scrollbar">
            <GitHubCalendar
              username="rishabhnema21"
              theme={customTheme}
              blockSize={9}
              blockMargin={2.9}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubContribution;
