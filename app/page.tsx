"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LinkSection } from "@/components/link";
import { Social } from "@/components/social";
import { AnimatedBackground } from "@/components/animated-background";
import { WhyBitesInByte } from "@/components/why-bitesinbyte";
import getConfig from "@/utils/configUtils";
import getLinkData from "@/utils/linksUtils";

const fadeUp = (delay: number) => ({
	initial: { opacity: 0, y: 24, filter: "blur(8px)" },
	animate: { opacity: 1, y: 0, filter: "blur(0px)" },
	transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Home() {
	const config = getConfig();
	const linkData = getLinkData();

	return (
		<>
			<AnimatedBackground />
			<main className="relative flex flex-col items-center min-h-screen px-5 py-16 md:py-24">
				<div className="w-full max-w-md flex flex-col items-center">
					{/* Avatar with gradient ring */}
					<motion.div
						className="relative mb-6"
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.1 }}
					>
						{/* Glow behind avatar */}
						<motion.div
							className="absolute inset-0 rounded-full avatar-ring opacity-40 blur-xl scale-125"
							animate={{ opacity: [0.3, 0.5, 0.3], scale: [1.2, 1.35, 1.2] }}
							transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
						/>
						{/* Ring */}
						<div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full p-[3px] avatar-ring">
							<div className="w-full h-full rounded-full bg-[var(--bg-primary)] flex items-center justify-center overflow-hidden">
								<Image
									src={`/${config.mainImageSource}`}
									alt={config.mainImageAlt}
									width={180}
									height={180}
									className="w-full h-full object-cover"
									priority
								/>
							</div>
						</div>
					</motion.div>

					{/* Brand name */}
					<motion.h1
						className="text-3xl md:text-4xl font-extrabold gradient-text tracking-tight mb-2"
						{...fadeUp(0.25)}
					>
						{config.brandName}
					</motion.h1>

					{/* Description */}
					<motion.p
						className="text-[var(--text-secondary)] text-center text-sm md:text-base leading-relaxed max-w-xs mb-6"
						{...fadeUp(0.35)}
					>
						{config.description}
					</motion.p>

					{/* Social icons */}
					{config.socialLinks && (
						<motion.div className="mb-10" {...fadeUp(0.45)}>
							<Social socialLink={config.socialLinks} />
						</motion.div>
					)}

					{/* Links */}
					{linkData && (
						<motion.div className="w-full" {...fadeUp(0.55)}>
							<LinkSection linkData={linkData} />
						</motion.div>
					)}

					{/* Why Bites In Byte */}
					<motion.div className="w-full mt-8" {...fadeUp(0.75)}>
						<WhyBitesInByte />
					</motion.div>
				</div>

				{/* Footer */}
				<motion.footer
					className="w-full max-w-md mt-16 pt-8 border-t border-[var(--glass-border)]"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.2, duration: 0.6 }}
				>
					<div className="flex flex-col items-center gap-4 text-center">
						<div className="flex items-center gap-2">
							<Image
								src={`/${config.mainImageSource}`}
								alt={config.mainImageAlt}
								width={24}
								height={24}
								className="w-6 h-6 rounded-full"
							/>
							<span className="text-sm font-semibold">{config.brandName}</span>
						</div>
						<p className="text-xs text-[var(--text-secondary)] leading-relaxed max-w-xs">
							Small, practical software packed into every byte.
						</p>
						<div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-[var(--text-secondary)]">
							<a href="https://www.bitesinbyte.com/#products" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-1)] transition-colors">Products</a>
							<a href="https://www.bitesinbyte.com/#about" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-1)] transition-colors">About</a>
							<a href="https://blogs.bitesinbyte.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-1)] transition-colors">Blog</a>
							<a href="https://www.bitesinbyte.com/#contact" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-1)] transition-colors">Contact</a>
						</div>
						<p className="text-[0.65rem] text-[var(--text-secondary)] opacity-60 pb-6">
							&copy; {new Date().getFullYear()} Bites In Byte. All rights reserved.
						</p>
					</div>
				</motion.footer>
			</main>
		</>
	);
}
