"use client";

import { motion } from "framer-motion";
import { SocialLink } from "./socialLink";
import { ThemeSwitch } from "./theme-switch";
import type { SocialLink as SocialLinkType } from "@/types";

type SocialProps = {
    socialLink: SocialLinkType;
};

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.08 },
    },
};

const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
};

const socialOrder = [
    "web", "github", "blog", "linkedin", "instagram",
    "mastodon", "threads", "twitter", "youtube",
    "facebook", "tiktok", "snapchat",
] as const;

export const Social = ({ socialLink }: SocialProps) => {
    return (
        <motion.div
            className="flex flex-wrap items-center justify-center gap-3"
            variants={container}
            initial="hidden"
            animate="show"
        >
            {socialOrder.map((key) => {
                const href = socialLink[key];
                if (!href) return null;
                return (
                    <motion.div key={key} variants={item}>
                        <SocialLink href={href} brand={key} />
                    </motion.div>
                );
            })}
            <motion.div variants={item}>
                <ThemeSwitch />
            </motion.div>
        </motion.div>
    );
};