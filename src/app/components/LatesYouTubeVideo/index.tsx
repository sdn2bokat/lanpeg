"use client";
import { useEffect, useState } from "react";

export default function LatestYouTubeVideo() {
  const [videoId, setVideoId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLatestVideo() {
      try {
        const res = await fetch("/api/latest-youtube");
        const data = await res.json();
        if (!data.xml) return;

        const parser = new DOMParser();
        const xml = parser.parseFromString(data.xml, "text/xml");
        const latestEntry = xml.querySelector("entry link");
        if (!latestEntry) return;

        const videoUrl = latestEntry.getAttribute("href");
        if (!videoUrl) return;

        const id = videoUrl.split("v=")[1];
        setVideoId(id);
      } catch (error) {
        console.error(error);
      }
    }

    fetchLatestVideo();
  }, []);

  if (!videoId)
    return <p className="text-center text-gray-500">Memuat video terbaru...</p>;

  return (
    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
  <iframe
    className="absolute top-0 left-0 w-full h-full rounded-xl"
    src={`https://www.youtube.com/embed/${videoId}`}
    title="Video Terbaru SDN 2 Bokat"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
</div>
  );
}
