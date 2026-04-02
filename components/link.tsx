"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { getCategoryIcon, getLinkIcon, ExternalLinkIcon } from "@/components/icons";
import capitalizeFirstLetter from "@/utils/stringUtils";
import type { LinkData } from "@/types";

function getFaviconUrl(url: string): string {
    try {
        const domain = new URL(url).hostname;
        return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
    } catch {
        return "";
    }
}

const FAVICON_CATEGORIES = new Set(["products"]);

type LinkSectionProps = {
    linkData: LinkData;
};

export const LinkSection = ({ linkData }: LinkSectionProps) => {
    let globalIndex = 0;

    return (
        <div className="flex flex-col gap-8 w-full">
            {Object.entries(linkData).map(([category, links]) => {
                if (links.length === 0) return null;
                const Icon = getCategoryIcon(category);
                const startIndex = globalIndex;
                globalIndex += links.length;

                return (
                    <div key={category}>
                        {/* Category label */}
                        <motion.div
                            className="section-label flex items-center gap-2"
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + startIndex * 0.04, duration: 0.4 }}
                        >
                            <Icon size={14} />
                            <span>{capitalizeFirstLetter(category)}</span>
                            <span className="ml-auto text-[0.65rem] opacity-50">{links.length}</span>
                        </motion.div>

                        {/* Link cards */}
                        <div className="flex flex-col gap-3">
                            {links.map((l, i) => {
                                const useFavicon = FAVICON_CATEGORIES.has(category.toLowerCase());
                                const favicon = useFavicon ? getFaviconUrl(l.link) : "";
                                const LinkIcon = getLinkIcon(l.link) || Icon;
                                return (
                                    <motion.a
                                        key={i}
                                        href={l.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link-button group"
                                        initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                        transition={{
                                            delay: 0.65 + (startIndex + i) * 0.06,
                                            duration: 0.45,
                                            ease: [0.22, 1, 0.36, 1] as const,
                                        }}
                                        whileHover={{ y: -2, scale: 1.01 }}
                                        whileTap={{ scale: 0.985 }}
                                    >
                                        {/* Icon */}
                                        <div className="w-9 h-9 rounded-lg bg-[var(--bg-secondary)] flex items-center justify-center shrink-0 overflow-hidden group-hover:bg-[var(--accent-1)]/10 transition-colors">
                                            {useFavicon && favicon ? (
                                                <Image
                                                    src={favicon}
                                                    alt={l.title}
                                                    width={20}
                                                    height={20}
                                                    className="w-5 h-5 object-contain"
                                                    unoptimized
                                                />
                                            ) : (
                                                <LinkIcon size={16} className="text-[var(--accent-1)]" />
                                            )}
                                        </div>

                                        {/* Title + URL hint */}
                                        <div className="flex-1 min-w-0">
                                            <span className="font-semibold text-sm block truncate">
                                                {l.title}
                                            </span>
                                            <span className="text-[0.65rem] text-[var(--text-secondary)] truncate block opacity-60">
                                                {l.link.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                                            </span>
                                        </div>

                                        {/* Arrow */}
                                        <motion.div
                                            className="text-[var(--text-secondary)] group-hover:text-[var(--accent-1)] transition-colors shrink-0"
                                            initial={{ x: 0 }}
                                            whileHover={{ x: 3 }}
                                        >
                                            <ExternalLinkIcon size={15} />
                                        </motion.div>
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};