import React, { forwardRef } from 'react';
import Image from 'next/image';

interface Solution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  imageUrl: string;
}

interface SolutionItemProps {
  solution: Solution;
}

const SolutionItem = forwardRef<HTMLDivElement, SolutionItemProps>(({ solution }, ref) => {
  return (
    <section 
      ref={ref}
      id={solution.id}
      className="solution-item h-screen w-full relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="solution-bg absolute inset-0 w-full h-full">
        <Image
          src={solution.imageUrl}
          alt={solution.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      {/* Content */}
      <div className="solution-content relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {solution.title}
          </h2>
          
          <h3 className="text-xl md:text-2xl text-yellow-300 mb-6">
            {solution.subtitle}
          </h3>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            {solution.description}
          </p>
          
          <ul className="space-y-3">
            {solution.keyPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="text-yellow-500 mr-3">•</span>
                <span className="text-gray-100">{point}</span>
              </li>
            ))}
          </ul>
          
          {/* <button className="mt-10 px-8 py-4 bg-yellow-500 text-gray-900 font-bold rounded-full hover:bg-yellow-400 transition-colors">
            Discover {solution.title}
          </button> */}
        </div>
      </div>
    </section>
  );
});

SolutionItem.displayName = 'SolutionItem';

export default SolutionItem;