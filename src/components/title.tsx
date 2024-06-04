import React from "react";

const Title = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div className={className}>
      <h1 className="text-3xl font-bold group-hover:text-purple-500 transition-all">
        {text}
      </h1>
      <div className="w-40 h-2 bg-yellow-500 rounded-full"></div>
      <div className="w-40 h-2 bg-violet-900 rounded-full translate-x-2"></div>
    </div>
  );
};

export default Title;
