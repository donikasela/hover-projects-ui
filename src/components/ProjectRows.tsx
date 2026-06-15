"use client";

import { useEffect, useRef } from "react";
import sampleData from "../data/sampleData.json";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";

export default function ProjectRows() {
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cleanup: (() => void)[] = [];

    containerRefs.current.forEach((element, index) => {
      if (!element) return;
      const image = element.querySelector<HTMLImageElement>("img.swipeimage");
      const isLast = index === containerRefs.current.length - 1;
      if (!image) return;

      gsap.set(image, { yPercent: isLast ? -400 : -350, xPercent: 50 });

      const setX = gsap.quickTo(image, "x", {
        duration: 0.8,
        ease: "power3",
      });
      const setY = gsap.quickTo(image, "y", {
        duration: 0.8,
        ease: "power3",
      });

      let firstEnter = false;

      const align = (e: MouseEvent) => {
        if (firstEnter) {
          setX(e.clientX, e.clientX);
          setY(e.clientY, e.clientY);
          firstEnter = false;
        } else {
          setX(e.clientX);
          setY(e.clientY);
        }
      };

      const startFollow = () => document.addEventListener("mousemove", align);
      const stopFollow = () => document.removeEventListener("mousemove", align);

      const fade = gsap.to(image, {
        autoAlpha: 1,
        ease: "none",
        paused: true,
        duration: 0.1,
        onReverseComplete: stopFollow,
      });

      const onEnter = (e: MouseEvent) => {
        firstEnter = true;
        fade.play();
        startFollow();
        align(e);
      };
      const onLeave = () => fade.reverse();

      element.addEventListener("mouseenter", onEnter as EventListener);
      element.addEventListener("mouseleave", onLeave);

      cleanup.push(() => {
        element.removeEventListener("mouseenter", onEnter as EventListener);
        element.removeEventListener("mouseleave", onLeave);
        stopFollow();
        fade.kill();
      });
    });
    return () => cleanup.forEach((fn) => fn());
  }, []);
  return (
    <div className="mx-auto">
      {sampleData.map((project, i) => (
        <div
          key={project.id}
          ref={(el) => {
            containerRefs.current[i] = el;
          }}
          className="container relative flex flex-col gap-2 py-5 border-b border-dark/20 dark:border-light/20 cursor-pointer md:grid md:grid-cols-4 md:items-center md:gap-0"
        >
          <img
            className="swipeimage pointer-events-none fixed z-10 opacity-0 w-60 h-32"
            src={project.imageUrl}
            alt={project.alt}
          />
          <p className="font-black">{project.title}</p>
          <p>{project.city}</p>
          <p>{project.date}</p>
          <button className="group flex items-center gap-3 text-sm uppercase tracking-widest font-black transition-all duration-300 hover:gap-5 cursor-pointer">
            View Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      ))}
    </div>
  );
}
