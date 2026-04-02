"use client";

import { motion } from "framer-motion";

const bits = [1, 0, 1, 1, 0, 0, 1, 0];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.06, delayChildren: 0.2 },
    },
};

const bitItem = {
    hidden: { opacity: 0, scale: 0, rotateY: 90 },
    show: {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        transition: { type: "spring" as const, stiffness: 300, damping: 15 },
    },
};

const fadeIn = (delay: number) => ({
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
});

export const WhyBitesInByte = () => {
    return (
        <motion.div
            className="w-full glass-card gradient-border rounded-2xl p-6 md:p-8 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            {/* Header */}
            <motion.p
                className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--accent-1)] font-semibold mb-3"
                {...fadeIn(0.1)}
            >
                Fun fact
            </motion.p>
            <motion.h2
                className="text-lg md:text-xl font-bold mb-5"
                {...fadeIn(0.15)}
            >
                Why &ldquo;Bites In Byte&rdquo;?
            </motion.h2>

            {/* Byte visualization */}
            <motion.div
                className="flex items-center justify-center gap-4 mb-6"
                {...fadeIn(0.2)}
            >
                <span className="text-xs text-[var(--text-secondary)] font-mono">1 byte =</span>
                <motion.div
                    className="flex gap-1.5"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {bits.map((bit, i) => (
                        <motion.span
                            key={i}
                            variants={bitItem}
                            className={`
                w-7 h-7 md:w-8 md:h-8 rounded-md flex items-center justify-center
                font-mono text-xs font-bold
                ${bit === 1
                                    ? "bg-[var(--accent-1)]/20 text-[var(--accent-1)]"
                                    : "bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
                                }
              `}
                        >
                            {bit}
                        </motion.span>
                    ))}
                </motion.div>
                <span className="text-xs text-[var(--text-secondary)] font-mono">8 bits</span>
            </motion.div>

            {/* The story */}
            <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                <motion.p {...fadeIn(0.4)}>
                    We originally wanted{" "}
                    <span className="font-mono text-[var(--text-primary)] font-semibold">
                        &ldquo;bitsinbyte&rdquo;
                    </span>{" "}
                    — as in &ldquo;bits in a byte,&rdquo; a nod to the building blocks of digital data.
                </motion.p>

                {/* The rename animation */}
                <motion.div
                    className="flex items-center justify-center gap-3 py-3"
                    {...fadeIn(0.55)}
                >
                    <span className="font-mono text-sm line-through text-[var(--text-secondary)]/60 decoration-red-400/60">
                        bitsinbyte
                    </span>
                    <motion.span
                        className="text-[var(--accent-1)]"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        →
                    </motion.span>
                    <motion.span
                        className="font-mono text-sm font-bold gradient-text"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                    >
                        bitesinbyte
                    </motion.span>
                </motion.div>

                <motion.p {...fadeIn(0.7)}>
                    But that name was taken! So we went with{" "}
                    <span className="font-mono text-[var(--text-primary)] font-semibold">
                        &ldquo;bitesinbyte&rdquo;
                    </span>{" "}
                    — small, useful{" "}
                    <span className="text-[var(--accent-1)] font-semibold">bites</span> of
                    software packed into every byte.
                </motion.p>

                <motion.p {...fadeIn(0.85)}>
                    What started as a workaround became the perfect name for what we do:{" "}
                    <span className="text-[var(--text-primary)] font-medium">
                        building compact, impactful tools — one bite at a time.
                    </span>
                </motion.p>
            </div>

            {/* Tags */}
            <motion.div
                className="flex flex-wrap gap-2 mt-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.4 }}
            >
                {["compact", "impactful", "practical"].map((tag, i) => (
                    <motion.span
                        key={tag}
                        className="text-[0.65rem] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[var(--accent-1)]/10 text-[var(--accent-1)]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.05 + i * 0.08, type: "spring", stiffness: 300 }}
                    >
                        {tag}
                    </motion.span>
                ))}
            </motion.div>
        </motion.div>
    );
};
