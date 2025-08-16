'use client';
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const solutions = [
	{
		title: "Brand Revolution",
		description: "Bold transformation for established brands",
		keyPoints: [
			"Comprehensive brand audit",
			"Strategic repositioning",
			"Visual identity overhaul",
		],
	},
	{
		title: "Brand Creation",
		description: "Strong identity for new businesses",
		keyPoints: [
			"Market research",
			"Brand naming & positioning",
			"Complete visual identity",
		],
	},
	{
		title: "Digital Presence",
		description: "Enhancing online visibility and engagement",
		keyPoints: [
			"Website design & development",
			"SEO & analytics",
			"Social media strategy",
		],
	},
	{
		title: "Creative Campaigns",
		description: "Memorable experiences that connect with audiences",
		keyPoints: [
			"Integrated campaigns",
			"Content creation",
			"Performance tracking",
		],
	},
];

export default function SolutionsShowcase() {
	const [activeIndex, setActiveIndex] = useState(0);
	const contentRef = useRef<HTMLDivElement>(null);
	const listItemsRef = useRef<(HTMLLIElement | null)[]>([]);

	useEffect(() => {
		if (contentRef.current) {
			gsap.fromTo(
				contentRef.current,
				{ opacity: 0, y: 30, scale: 0.95 },
				{ opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power3.out" }
			);
		}

		// Stagger animation for key points
		gsap.fromTo(
			listItemsRef.current,
			{ opacity: 0, x: -20 },
			{
				opacity: 1,
				x: 0,
				duration: 0.5,
				stagger: 0.15,
				delay: 0.2,
				ease: "power2.out",
			}
		);
	}, [activeIndex]);

	return (
		<section className="py-24 px-6 bg-[whitesmoke] text-black relative overflow-hidden">
			{/* Decorative background glow */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"></div>

			<div className="relative max-w-7xl mx-auto">
				<h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6">
					Our <span className="text-purple-400">Solutions</span>
				</h2>
				<p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
					Tailored approaches to meet your brand's unique challenges
				</p>

				<div className="flex flex-col md:flex-row gap-10">
					{/* Tabs */}
					<div className="md:w-1/3 flex flex-col gap-4">
						{solutions.map((solution, index) => (
							<button
								key={index}
								onClick={() => setActiveIndex(index)}
								className={`text-left p-5 rounded-xl transition-all border 
                  ${
						activeIndex === index
							? "bg-purple-300 text-gray-900 font-bold border-purple-400 shadow-lg scale-105"
							: "bg-gray-200 border-gray-300 hover:border-purple-500 hover:scale-105"
					}`}
							>
								<h4 className="text-lg">{solution.title}</h4>
							</button>
						))}
					</div>

					{/* Content */}
					<div
						ref={contentRef}
						className="md:w-2/3 bg-gray-100 backdrop-blur-md p-10 rounded-2xl "
					>
						<h3 className="text-2xl font-bold mb-3">
							{solutions[activeIndex].title}
						</h3>
						<p className="text-purple-700 mb-6">
							{solutions[activeIndex].description}
						</p>

						<ul className="space-y-3">
							{solutions[activeIndex].keyPoints.map((point, i) => (
								<li
									key={i}
									ref={(el) => {
										listItemsRef.current[i] = el;
									}}
									className="flex items-start"
								>
									<span className="text-purple-500 mr-2">✔</span>
									<span>{point}</span>
								</li>
							))}
						</ul>

						{/* <button className="mt-8 px-6 py-3 bg-purple-500 text-gray-900 font-bold rounded-full hover:bg-purple-400 transition-colors">
							Learn More
						</button> */}
					</div>
				</div>
			</div>
		</section>
	);
}
