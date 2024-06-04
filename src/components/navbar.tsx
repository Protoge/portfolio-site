import { cn } from "@/lib/utils";
import { Code, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = ({ className }: { className?: string }) => {
  const socials = [
    {
      link: "https://www.linkedin.com/in/rene-jasper-gilo-44b0ab184/",
      label: "Linkedin",
      Icon: Linkedin,
    },
    {
      link: "https://github.com/Protoge",
      label: "Github",
      Icon: Github,
    },
  ];

  return (
    <nav className={cn("py-10 flex justify-between items-center ", className)}>
      <h1 className="flex items-center gap-2 text-2xl font-bold  -rotate-2">
        <span>
          Rene J.
          <div className="w-20 h-1 bg-yellow-500 rounded-full"></div>
          <div className="w-20 h-1 bg-violet-900 rounded-full translate-x-2"></div>
        </span>
        <Image
          src="/code-logo.svg"
          width={40}
          height={40}
          alt=""
          className=""
        />
      </h1>
      <div className="flex gap-5">
        {socials.map((social, index) => (
          <Link href={social.link} key={index} aria-label={social.label}>
            <social.Icon className="w-5 h-5 hover:scale-125 transition-all" />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
