"use client";
import React from "react";
import Title from "./title";
import { HoverEffect } from "./ui/card-hover-effect";
import {
  SiDrizzle,
  SiFigma,
  SiGit,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      text: "Supabase",
      Icon: SiSupabase,
    },
    {
      text: "Prisma",
      Icon: SiPrisma,
    },
    {
      text: "Drizzle",
      Icon: SiDrizzle,
    },
    {
      text: "Node.js",
      Icon: SiNodedotjs,
    },
    {
      text: "Figma",
      Icon: SiFigma,
    },
    {
      text: "Git",
      Icon: SiGit,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-20">
      <Title
        text="Skills 🔥"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
};

export default Skills;
