import React from "react";
import { useRef } from "react";
const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <section id="hero">
      <div>
        <h1>MacBook Pro</h1>
        <img src="/title.png" alt="Macbook Title" />
      </div>
      <video
        ref={videoRef}
        src="/videos/hero.mp4"
        autoPlay
        muted
        playsInline
        aria-label="MacBook Pro hero video"
      />{" "}
      <button>Buy</button>
      <p>From $1599 or $133.mo for 12 months </p>
    </section>
  );
};

export default Hero;
