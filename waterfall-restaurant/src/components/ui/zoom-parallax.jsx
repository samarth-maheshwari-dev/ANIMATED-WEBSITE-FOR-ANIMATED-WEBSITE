'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export function ZoomParallax({ images }) {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});

	const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
	const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
	const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
	const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
	const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

	const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

	const getInnerClasses = (index) => {
		switch (index) {
			case 0:
				return "w-[60vw] h-[30vh] md:w-[25vw] md:h-[25vh]";
			case 1:
				return "-top-[25vh] left-[8vw] w-[50vw] h-[22vh] md:-top-[30vh] md:left-[5vw] md:w-[35vw] md:h-[30vh]";
			case 2:
				return "-top-[12vh] -left-[18vw] w-[35vw] h-[35vh] md:-top-[10vh] md:-left-[25vw] md:w-[20vw] md:h-[45vh]";
			case 3:
				return "left-[18vw] w-[35vw] h-[18vh] md:left-[27.5vw] md:w-[25vw] md:h-[25vh]";
			case 4:
				return "top-[25vh] left-[8vw] w-[35vw] h-[20vh] md:top-[27.5vh] md:left-[5vw] md:w-[20vw] md:h-[25vh]";
			case 5:
				return "top-[25vh] -left-[18vw] w-[45vw] h-[22vh] md:top-[27.5vh] md:-left-[22.5vw] md:w-[30vw] md:h-[25vh]";
			case 6:
				return "top-[20vh] left-[20vw] w-[25vw] h-[12vh] md:top-[22.5vh] md:left-[25vw] md:w-[15vw] md:h-[15vh]";
			default:
				return "w-[25vw] h-[25vh]";
		}
	};

	return (
		<div ref={container} className="relative h-[300vh] w-full bg-background-dark">
			<div className="sticky top-0 h-screen overflow-hidden w-full">
				{images.map(({ src, alt }, index) => {
					const scale = scales[index % scales.length];

					return (
						<motion.div
							key={index}
							style={{ scale }}
							className="absolute top-0 flex h-full w-full items-center justify-center"
						>
							<div className={`relative ${getInnerClasses(index)} rounded-xl border border-primary/20 shadow-2xl overflow-hidden`}>
								<div className="absolute inset-0 bg-black/20 z-10 hover:bg-transparent transition-all duration-300 pointer-events-none" />
								<img
									src={src || '/placeholder.svg'}
									alt={alt || `Parallax image ${index + 1}`}
									className="h-full w-full object-cover rounded-xl"
								/>
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}
