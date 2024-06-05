import React from "react";

import {
  SiAxios,
  SiClerk,
  SiDrizzle,
  SiFigma,
  SiFramer,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReacthookform,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiWix,
  SiZod,
} from "react-icons/si";
import Title from "./title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Website (Wix Studio CRM)",
      tech: [SiNextdotjs, SiTailwindcss, SiWix, SiZod],
      link: "https://nextjs-e-commerce-wixstudio.vercel.app/",
      cover: "/webimages/shopease.png",
      background: "bg-violet-900",
    },
    {
      title: "Professional Responsive Design Website",
      tech: [SiNextdotjs, SiTailwindcss, SiFigma],
      link: "https://nextjs-responsive-design-tailwind.vercel.app/",
      cover: "/webimages/responsive.png",
      background: "bg-violet-900",
    },
    {
      title: "Blog Website (Sanity CMS)",
      tech: [
        SiNextdotjs,
        SiTailwindcss,
        SiSanity,
        SiReacthookform,
        SiZod,
        SiShadcnui,
      ],
      link: "https://nextjs-blog-tags.vercel.app",
      cover: "/webimages/blog.png",
      background: "bg-violet-900",
    },
    {
      title: "Kanban Board App",
      tech: [
        SiNextdotjs,
        SiTailwindcss,
        SiClerk,
        SiPrisma,
        SiStripe,
        SiShadcnui,
      ],
      link: "https://taskify-eta-six.vercel.app/",
      cover: "/webimages/taskify.png",
      background: "bg-yellow-500",
    },
    {
      title: "Budget Tracking App",
      tech: [
        SiNextdotjs,
        SiTailwindcss,
        SiClerk,
        SiPrisma,
        SiShadcnui,
        SiSupabase,
      ],
      link: "https://budgetfy.vercel.app/",
      cover: "/webimages/budgetfy.png",
      background: "bg-violet-900",
    },
    {
      title: "Messaging and File-sharing App",
      tech: [
        SiNextdotjs,
        SiTailwindcss,
        SiClerk,
        SiShadcnui,
        SiSocketdotio,
        SiPrisma,
      ],
      link: "https://chatify-eight-pi.vercel.app",
      cover: "/webimages/chatify.png",
      background: "bg-violet-900",
    },
    {
      title: "Video Streaming App",
      tech: [
        SiNextdotjs,
        SiTailwindcss,
        SiDrizzle,
        SiPostgresql,
        SiZod,
        SiSupabase,
      ],
      link: "https://pairprogramming-app.vercel.app/",
      cover: "/webimages/stream.png",
      background: "bg-yello-500",
    },

    {
      title: "Food Calorie Counter and Recipe App",
      tech: [
        SiNextdotjs,
        SiTailwindcss,
        SiPrisma,
        SiSupabase,
        SiShadcnui,
        SiFramer,
        SiAxios,
      ],
      link: "https://web-app-recipe.vercel.app/",
      cover: "/webimages/recipe.png",
      background: "bg-violet-900",
    },
  ];

  return (
    <div className="py-10 p-5 sm:p-0 ">
      <Title
        text="Projects 💻"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => (
          <Link key={index} href={project.link} className="">
            <div
              className={cn(
                `p-1 rounded-md hover:bg-yellow-500 bg-transparent transition-colors duration-900 ease-in-out`
              )}
            >
              <div className="bg-black bg-opacity-75  text-amber-50 p-3  rounded-md bg-transparent hover:bg-violet-900 transition-colors duration-900 ease-in-out ">
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5  cursor-pointer "
                >
                  <h1 className="">{project.title}</h1>
                  <div className="flex items-center gap-5">
                    {project.tech.map((Icon, index) => (
                      <Icon className="w-8 h-8" key={index} />
                    ))}
                  </div>
                </DirectionAwareHover>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
