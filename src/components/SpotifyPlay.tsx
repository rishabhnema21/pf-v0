"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa6";
import { CiPlay1 } from "react-icons/ci";

type SpotifyTrack = {
  name: string | null;
  artist: string | null;
  album: string | null;
  image: string | null;
  url: string | null;
  nowPlaying: boolean;
  error?: string;
};

const fallbackTrack: SpotifyTrack = {
  name: null,
  artist: null,
  album: null,
  image: null,
  url: null,
  nowPlaying: false,
};

const REFRESH_INTERVAL_MS = 5 * 60 * 1000;

const SpotifyPlay = () => {
  const [track, setTrack] = useState<SpotifyTrack>(fallbackTrack);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchTrack = async () => {
      if (document.hidden) {
        return;
      }

      try {
        const res = await fetch("/api/spotifytrack");
        const data = (await res.json()) as SpotifyTrack;

        if (isMounted) {
          setTrack(res.ok ? data : { ...fallbackTrack, error: data.error });
        }
      } catch {
        if (isMounted) {
          setTrack({
            ...fallbackTrack,
            error: "Unable to load Spotify activity.",
          });
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    const fetchTrackWhenVisible = () => {
      if (!document.hidden) {
        fetchTrack();
      }
    };

    fetchTrackWhenVisible();
    const interval = window.setInterval(fetchTrack, REFRESH_INTERVAL_MS);
    document.addEventListener("visibilitychange", fetchTrackWhenVisible);

    return () => {
      isMounted = false;
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", fetchTrackWhenVisible);
    };
  }, []);

  const hasTrack = Boolean(track.name || track.artist);
  const statusLabel = track.nowPlaying ? "Currently Playing" : "Last Played";
  const title = isLoading
    ? "Loading Activity"
    : track.name ?? "Currently No Activity";
  const subtitle = isLoading
    ? "Fetching latest track"
    : track.artist ?? track.error ?? "No Activity Available";
  const imageSrc = track.image || "/spotifyImagePlaceholder.webp";

  return (
    <div className="w-full bg-zinc-300/50 shadow-md dark:shadow-lg dark:bg-zinc-800/60 px-3 py-4 rounded-md mt-7">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center space-x-3">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md">
            {track.image ? (
              <Image
                src={imageSrc}
                alt={track.album ? `${track.album} album art` : "Album art"}
                width={56}
                height={56}
                className="h-full w-full object-cover"
              />
            ) : (
              <Image
                src={imageSrc}
                alt="Spotify Image Placeholder"
                width={56}
                height={56}
                className="h-full w-full object-cover"
              />
            )}
          </div>

          <div className="flex min-w-0 flex-col">
            <div className="flex items-center space-x-2">
              <div className="p-1 rounded-sm bg-zinc-600/30 dark:bg-zinc-300/30">
                <FaSpotify />
              </div>
              <span className="text-xs text-zinc-800 dark:text-zinc-200 font-medium">
                {statusLabel}
              </span>
            </div>

            <div className="mt-0.5">
              <h3 className="max-w-48 truncate text-zinc-800 capitalize dark:text-zinc-200 text-sm font-medium">
                {title}
              </h3>
              <h4 className="max-w-48 truncate text-zinc-800 capitalize dark:text-zinc-400 text-xs font-medium">
                {subtitle}
              </h4>
            </div>
          </div>
        </div>

        <div>
          {hasTrack && track.url ? (
            <a
              href={track.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${track.name ?? "track"} on Spotify`}
              className="w-9 h-9 flex justify-center items-center bg-zinc-300 dark:bg-zinc-900 rounded shadow-md dark:hover:bg-zinc-700 transition-all duration-150 ease-in cursor-pointer"
            >
              <CiPlay1 />
            </a>
          ) : (
            <div className="w-9 h-9 flex justify-center items-center bg-zinc-300 dark:bg-zinc-900 rounded shadow-md opacity-60">
              <CiPlay1 />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpotifyPlay;
