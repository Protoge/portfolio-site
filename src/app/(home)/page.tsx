import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import Skills from "@/components/skills";
import React from "react";
import Projects from "@/components/projects";
import Footer from "@/components/footer";

const Page = () => {
  return (
    <div className="min-h-screen bg-black text-amber-50 overflow-hidden fadeInUp-animation">
      <div className="dark:bg-black bg-white dark:bg-grid-white/[0.05] relative">
        <div className="max-w-5xl mx-auto p-5">
          <Navbar />
          <HeroSection />
        </div>
      </div>
      <div className="max-w-5xl mx-auto p-5 mt-20 ">
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default Page;
