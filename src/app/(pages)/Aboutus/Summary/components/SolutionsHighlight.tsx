'use client';
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BtnSumm from "./btnSumm";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

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
		title: "Brand Elevation",
		description: "Enhanced market presence",
		keyPoints: [
			"Brand perception assessment",
			"Enhanced storytelling",
			"Engagement optimization",
		],
	},
	{
		title: "Brand Boost",
		description: "Quick, measurable improvements",
		keyPoints: [
			"Targeted advertising",
			"Conversion optimization",
			"Short-term growth strategy",
		],
	},
];

export default function SolutionsHighlight() {
	const [activeIndex, setActiveIndex] = useState(0);
	const sectionRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		gsap.fromTo(
			titleRef.current,
			{ y: 50, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 0.8,
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 90%",
				},
			}
		);

		tabsRef.current.forEach((tab, i) => {
			if (!tab) return;

			gsap.fromTo(
				tab,
				{ y: 50, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 0.8,
					delay: i * 0.1,
					scrollTrigger: {
						trigger: sectionRef.current,
						start: "top 80%",
					},
				}
			);
		});

		// Animate content on active index change
		if (contentRef.current) {
			gsap.fromTo(
				contentRef.current,
				{ opacity: 0, y: 20 },
				{ opacity: 1, y: 0, duration: 0.5 }
			);
		}
	}, [activeIndex]);

	return (
		<section ref={sectionRef} className="py-20 px-6 bg-white text-black">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-16">
					<h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4">
						Our{" "}
						<span className="text-black">Solutions</span>
					</h2>
					<p className="text-gray-800 max-w-2xl mx-auto">
						Tailored approaches to meet your brand's unique challenges
					</p>
				</div>

				<div className="flex flex-col md:flex-row gap-8">
					{/* Solution Tabs */}
					<div className="md:w-1/3">
						<div className="space-y-4">
							{solutions.map((solution, index) => (
								<button
									key={index}
									ref={(el) => {
										tabsRef.current[index] = el;
									}}
									onClick={() => setActiveIndex(index)}
									className={`w-full text-left p-6 rounded-xl transition-all ${
										activeIndex === index
											? "bg-black text-white font-bold shadow-lg"
											: "bg-gray-100 hover:bg-gray-200"
									}`}
								>
									<h3 className="text-xl text-bla">{solution.title}</h3>
									<p className="text-sm mt-1 text-gray-100 font-mono">
										{solution.description}
									</p>
								</button>
							))}
						</div>
					</div>

					{/* Solution Content */}
					<div
						ref={contentRef}
						className="md:w-2/3 bg-gray-100 p-8 rounded-xl shadow-lg border-t-4 border-black"
					>
						<h3 className="text-2xl font-bold mb-2 text-black">
							{solutions[activeIndex].title}
						</h3>
						<p className="text-black mb-6">
							{solutions[activeIndex].description}
						</p>

						<ul className="space-y-3 mb-8">
							{solutions[activeIndex].keyPoints.map((point, i) => (
								<li key={i} className="flex items-start">
									<span className="text-black mr-2">•</span>
									<span className="text-gray-800">{point}</span>
								</li>
							))}
						</ul>

						<div className="bg-white p-6 rounded-lg">
							<h4 className="font-bold mb-3 text-black">Ideal For:</h4>
							<p className="text-gray-800">
								{activeIndex === 0 &&
									"Established brands seeking a bold transformation to remain relevant and competitive"}
								{activeIndex === 1 &&
									"New businesses ready to enter the market with a strong, distinctive identity"}
								{activeIndex === 2 &&
									"Brands aiming to enhance their market presence without a full rebrand"}
								{activeIndex === 3 &&
									"Brands seeking quick, measurable performance improvements"}
							</p>
						</div>

						{/* <button className="mt-8 px-6 py-3 bg-black text-black font-bold rounded-full hover:bg-yellow-400 transition-colors">
							Learn More
						</button> */}
						<Link href={"/Solutions"}>
							<BtnSumm text="Learn More" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}