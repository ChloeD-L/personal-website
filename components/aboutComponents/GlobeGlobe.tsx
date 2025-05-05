"use client";
// components/GlobeGlobe.tsx
import React, { useRef, useEffect } from "react";
import Globe from "globe.gl";

const MELBOURNE = { lat: -37.8136, lng: 144.9631, city: "Melbourne" };

export default function GlobeGlobe({ size = 300 }: { size?: number }) {
  const globeEl = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!globeEl.current) return;
    const width = globeEl.current.offsetWidth || size;
    const height = globeEl.current.offsetHeight || size;
    const globe = new Globe(globeEl.current)
      .width(width)
      .height(height)
      .backgroundColor("rgba(0,0,0,0)")
      .globeImageUrl(
        "//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg"
      )
      .pointsData([MELBOURNE])
      .pointLat("lat")
      .pointLng("lng")
      .pointColor(() => "orange")
      .pointAltitude(0.05)
      .pointRadius(0.5)
      .pointLabel("city");

    globe.controls().enableZoom = false;
    globe.pointOfView({ lat: -25, lng: 135, altitude: 0.45 }, 1000);

    // 清理
    return () => {
      if (globeEl.current) {
        globeEl.current.innerHTML = "";
      }
    };
  }, [size]);

  return (
    <div
      className="w-full max-w-[150px] sm:max-w-[220px] mx-auto flex items-center justify-center"
      style={{ aspectRatio: "1/1" }}
    >
      <div
        ref={globeEl}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      />
    </div>
  );
}
