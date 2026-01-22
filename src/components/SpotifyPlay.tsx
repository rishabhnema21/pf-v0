"use client";

import Image from "next/image";
import { FaSpotify } from "react-icons/fa6";
import { CiPlay1 } from "react-icons/ci";

const SpotifyPlay = () => {
  return (
    <div className="w-full bg-zinc-300/50 shadow-md dark:shadow-lg dark:bg-zinc-800/60 px-3 py-4 rounded-md mt-7">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center space-x-3">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md">
            <Image
              src="/spotifyImagePlaceholder.jfif"
              alt="Spotify Image Placeholder"
              width={48}
              height={48}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
                <div className="p-1 rounded-sm bg-zinc-600/30 dark:bg-zinc-300/30">
                    <FaSpotify />
                </div>
                <span className="text-xs text-zinc-800 dark:text-zinc-200 font-medium">Last Played</span>
            </div>

            <div className="mt-0.5">
                <h3 className="text-zinc-800 capitalize dark:text-zinc-200 text-sm font-medium">Currently No Activity</h3>
                <h4 className="text-zinc-800 capitalize dark:text-zinc-400 text-xs font-medium">No Activity Available</h4>
            </div>
          </div>
        </div>

        <div>
            <div className="w-9 h-9 flex justify-center items-center bg-zinc-300 dark:bg-zinc-900 rounded shadow-md dark:hover:bg-zinc-700 transition-all duration-150 ease-in cursor-pointer">
                <CiPlay1 />
            </div>
        </div>
      </div>
    </div>
  );
};

export default SpotifyPlay;
