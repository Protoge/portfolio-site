"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { cn } from "@/lib/utils";
import { TypewriterEffect2 } from "./ui/typewriter-effect2";
import { LampContainer } from "./ui/lamp";
import { motion } from "framer-motion";
import { Meteors } from "./ui/meteors";
import { MovingBoarderBtn } from "./ui/moving-boarder";
import Title from "./title";

const wordsOne = [
  {
    text: "Nice ",
  },
  {
    text: "to",
  },
  {
    text: "meet",
  },
  {
    text: "you!",
  },
];

const wordsTwo = [
  {
    text: "I'm",
  },
  {
    text: "Rene.",
  },
];

const HeroSection = () => {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(true);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=" lg:relative flex items-center justify-between lg:gap-0 gap-14 min-h-[80vh] lg:flex-row flex-col-reverse">
      <div className="space-y-10 text-center lg:text-left">
        <TypewriterEffect
          words={wordsOne}
          className="text-4xl lg:text-7xl font-bold text-center lg:text-left transition"
        />

        {showIntro ? (
          <TypewriterEffect
            words={wordsTwo}
            className={cn(
              "text-4xl  lg:text-7xl font-bold text-center lg:text-left "
            )}
          />
        ) : (
          <TypewriterEffect2
            words={wordsTwo}
            className={cn(
              "text-4xl  lg:text-7xl font-bold text-center lg:text-left invisible"
            )}
          />
        )}
        {/* <h1 className="text-4xl lg:text-7xl font-bold">
          Nice to meet you! 👋
          <br />{" "}
          <span className="underline underline-offset-8 decoration-purple-500">
            I&apos;m Rene.
          </span>
        </h1> */}
        <p className="md:w-96 text-lg text-gray-300">
          I&apos;m a full-stack developer with a Bachelor&apos;s Degree in Web
          and Information Systems at New Jersey Institute of Technology.
          I&apos;m passionate about building modern dynamic and responsive web
          applications from front to back that meets user needs and business
          objectives.
        </p>

        <Link
          href={"mailto:rjgilo2799@gmail.com"}
          className="inline-block group"
        >
          <div className="flex gap-5">
            <Title text="Contact me 📭" />
            <div>
              <MovingBoarderBtn
                borderRadius="0.5rem"
                className="p-3 font-semibold"
              >
                <p>📢 Available for work</p>
              </MovingBoarderBtn>
            </div>
          </div>
        </Link>
      </div>

      <div className="lg:absolute lg:top-[20%] lg:-right-[5%]">
        <div className="w-73 h-73 space-y-3 pt-10 pb-10 lg:p-0 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div
              className="w-32 h-32 rounded-2xl bg-yellow-500"
              style={{
                background: "url('/js.png')",
                backgroundSize: "contain",
              }}
            ></div>
            <div
              className="w-32 h-32 rounded-2xl bg-violet-900"
              style={{
                background: "url('/html-logo.svg')",
                backgroundSize: "cover",
              }}
            ></div>
            <div
              className="w-32 h-32 rounded-full bg-violet-900"
              style={{
                background: "url('/css-logo.svg')",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div
              className="w-32 h-32 rounded-full bg-violet-900"
              style={{
                background: "url('/react.svg')",
                backgroundSize: "cover",
              }}
            ></div>
            <div
              className="w-32 h-32 rounded-2xl bg-yellow-500"
              style={{
                background: "url('/next-logo.svg')",
                backgroundSize: "cover",
              }}
            ></div>

            <div
              className="w-32 h-32 rounded-2xl bg-yellow-500"
              style={{
                background: "url('/figma.svg')",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
