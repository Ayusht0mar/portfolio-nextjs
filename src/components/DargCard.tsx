"use client"

import React, { useRef, useState, RefObject } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface CardProps {
  containerRef?: RefObject<HTMLDivElement>;
  src: string;
  alt: string;
  top: string;
  left: string;
  rotate: string;
  className: string;
}

export const DragCards: React.FC = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center ">
      <h2 className="relative z-0 text-[20vw] font-black text-neutral-800 md:text-[200px]">
        Ayush
      </h2>
      <Cards />
    </section>
  );
};

const Cards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="/emojis/brian-chesky.png"
        alt="Example image"
        // rotate="6deg"
        rotate="-18deg"
        top="30%"
        left="15%"
        className="w-40 md:w-64"
        // top="20%"
        // left="25%"
        // className="w-36 md:w-56"
      />
      {/* <Card
        containerRef={containerRef}
        src="/emojis/captian-america.png"
        alt="Example image"
        rotate="12deg"
        top="45%"
        left="30%"
        className="w-24 md:w-48"
      /> */}
      <Card
        containerRef={containerRef}
        src="/emojis/elon-musk.png"
        alt="Example image"
        rotate="-6deg"
        top="20%"
        left="30%"
        className="w-52 md:w-80"
      />
      {/* <Card
        containerRef={containerRef}
        src="/emojis/iron-man.png"
        alt="Example image"
        rotate="8deg"
        top="50%"
        left="40%"
        className="w-48 md:w-72"
      /> */}
      <Card
        containerRef={containerRef}
        src="/emojis/mark-zuckerberg.png"
        alt="Example image"
        rotate="6deg"
        top="20%"
        left="50%"
        className="w-53 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="/emojis/steve-jobs.png"
        alt="Example image"
        rotate="18deg"
        top="30%"
        left="70%"
        className="w-40 md:w-64"
      />
    </div>
  );
};

export const Card: React.FC<CardProps> = ({
  containerRef,
  src,
  alt,
  top,
  left,
  rotate,
  className,
}) => {
  const [zIndex, setZIndex] = useState<number>(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll<HTMLImageElement>(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-48 border-8 border-b-[16px] border-neutral-200 bg-white",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      // Uncomment below and remove dragElastic to remove movement after release
      // dragMomentum={false}
      dragElastic={0.65}
    />
  );
};
