"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function HeroBannerImage() {
  const imageRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          entry.target.classList.remove("rotate-x-12");
        } else {
          entry.target.classList.add("rotate-x-12");
        }
      });
    }, {
      threshold: 0.5,
      rootMargin: "0px"
    });

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div className="perspective-distant">
      <Image
        ref={imageRef}
        src="/hero-banner.webp"
        alt="Hero Banner"
        width={1280}
        height={720}
        priority
        className="mx-auto rounded-xl shadow-2xl border object-cover z-[99] transition-transform duration-500 rotate-x-12"
      />
    </div>
  );
}
