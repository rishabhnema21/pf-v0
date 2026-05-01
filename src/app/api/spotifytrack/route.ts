import { NextResponse } from "next/server";

type LastFmImage = {
  size: string;
  "#text": string;
};

type LastFmTrack = {
  name?: string;
  url?: string;
  artist?: {
    "#text"?: string;
  };
  album?: {
    "#text"?: string;
  };
  image?: LastFmImage[];
  "@attr"?: {
    nowplaying?: string;
  };
};

type LastFmRecentTracksResponse = {
  error?: number;
  message?: string;
  recenttracks?: {
    track?: LastFmTrack | LastFmTrack[];
  };
};

const emptyTrack = {
  name: null,
  artist: null,
  album: null,
  image: null,
  url: null,
  nowPlaying: false,
};

const TRACK_REVALIDATE_SECONDS = 300;
const cacheHeaders = {
  "Cache-Control": `public, max-age=${TRACK_REVALIDATE_SECONDS}, s-maxage=${TRACK_REVALIDATE_SECONDS}, stale-while-revalidate=600`,
};

const getSpotifySearchUrl = (trackName?: string, artistName?: string) => {
  const query = [trackName, artistName].filter(Boolean).join(" ");

  if (!query) {
    return null;
  }

  return `https://open.spotify.com/search/${encodeURIComponent(query)}`;
};

export async function GET() {
  const username = process.env.LASTFM_USERNAME;
  const apiKey = process.env.LASTFM_API_KEY;

  if (!username || !apiKey) {
    return NextResponse.json(
      { ...emptyTrack, error: "Last.fm credentials are not configured." },
      { status: 500 }
    );
  }

  const params = new URLSearchParams({
    method: "user.getrecenttracks",
    user: username,
    api_key: apiKey,
    format: "json",
    limit: "1",
  });

  try {
    const res = await fetch(`https://ws.audioscrobbler.com/2.0/?${params}`, {
      next: { revalidate: TRACK_REVALIDATE_SECONDS },
    });

    if (!res.ok) {
      return NextResponse.json(
        { ...emptyTrack, error: "Unable to fetch recent Spotify activity." },
        { status: res.status }
      );
    }

    const data = (await res.json()) as LastFmRecentTracksResponse;

    if (data.error) {
      return NextResponse.json(
        { ...emptyTrack, error: data.message ?? "Last.fm returned an error." },
        { status: 502 }
      );
    }

    const tracks = data.recenttracks?.track;
    const track = Array.isArray(tracks) ? tracks[0] : tracks;

    if (!track) {
      return NextResponse.json(emptyTrack, { headers: cacheHeaders });
    }

    const image =
      track.image
        ?.slice()
        .reverse()
        .find((item) => item["#text"])?.["#text"] ?? null;

    const name = track.name ?? null;
    const artist = track.artist?.["#text"] ?? null;

    return NextResponse.json(
      {
        name,
        artist,
        album: track.album?.["#text"] ?? null,
        image,
        url: getSpotifySearchUrl(name ?? undefined, artist ?? undefined),
        nowPlaying: track["@attr"]?.nowplaying === "true",
      },
      { headers: cacheHeaders }
    );
  } catch {
    return NextResponse.json(
      { ...emptyTrack, error: "Unable to fetch recent Spotify activity." },
      { status: 500 }
    );
  }
}
