import React from "react";
import { useState } from "react";
import postIt from "../assets/images/post-it.png";
import {
    MotionConfig,
    delay,
    easeInOut,
    easeOut,
    motion,
    AnimatePresence,
} from "framer-motion";

const VARIANTS = {
    top: {
        open: {
            rotate: ["0deg", "0deg", "45deg"],
            top: ["35%", "50%", "50%"],
        },
        closed: {
            rotate: ["45deg", "0deg", "0deg"],
            top: ["50%", "50%", "35%"],
        },
    },
    middle: {
        open: {
            rotate: ["0deg", "0deg", "-45deg"],
        },
        closed: {
            rotate: ["-45deg", "0deg", "0deg"],
        },
    },
    bottom: {
        open: {
            rotate: ["0deg", "0deg", "45deg"],
            bottom: ["35%", "50%", "50%"],
            left: "50%",
        },
        closed: {
            rotate: ["45deg", "0deg", "0deg"],
            bottom: ["50%", "50%", "35%"],
            left: "calc(50% + 10px)",
        },
    },
};

interface Props {
    width: string;
    height: string;
}

const Burger = ({ width, height }: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <motion.div
            className="fixed z-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 shadow-lg shadow-blue-800/20 transition-color"
            initial={false}
            animate={
                isOpen
                    ? {
                          top: "16px",
                          right: "16px",
                          width: width,
                          height: height,
                      }
                    : {
                          top: "16px",
                          right: "16px",
                          width: "80px",
                          height: "80px",
                      }
            }
            transition={
                isOpen
                    ? {
                          delay: 0,
                      }
                    : {
                          delay: 0.8,
                      }
            }
        >
            <MotionConfig
                transition={{
                    duration: 0.5,
                    ease: easeInOut,
                }}
            >
                <motion.button
                    className="group fixed right-4 top-4 z-50 h-20 w-20 bg-white/0 transition-all hover:bg-white/20 rounded-x"
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    onClick={() => setIsOpen((o) => !o)}
                >
                    <motion.span
                        variants={VARIANTS.top}
                        className="absolute block h-1 w-10 bg-white"
                        style={{
                            y: "-50%",
                            left: "50%",
                            x: "-50%",
                            top: "35%",
                        }}
                    ></motion.span>
                    <motion.span
                        variants={VARIANTS.middle}
                        className="absolute block h-1 w-10 bg-white"
                        style={{
                            left: "50%",
                            x: "-50%",
                            top: "50%",
                            y: "-50%",
                        }}
                    ></motion.span>
                    <motion.span
                        variants={VARIANTS.bottom}
                        className="absolute block h-1 w-5 bg-white"
                        style={{
                            x: "-50%",
                            y: "50%",
                            bottom: "35%",
                            left: "calc(50% + 10px)",
                        }}
                    ></motion.span>
                </motion.button>
            </MotionConfig>
            <AnimatePresence>
                {isOpen && (
                    <nav className="fixed right-4 top-4 z-40 h-[calc(100vh_-_32px)] w-[calc(50%_-_32px)] overflow-hidden font-poppins">
                        <motion.a
                            href="#"
                            className="grid e h-20 w-20 place-content-center rounded-br-xl rounded-tl-xl bg-white transition-colors hover:bg-blue-50"
                            key="pic"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{
                                ease: easeInOut,
                                delay: 0.1,
                                duration: 0.5,
                            }}
                        >
                            <img
                                src={postIt}
                                alt="note icon"
                                className="w-10"
                            />
                        </motion.a>
                        <div className="space-y-4 p-6 pl-4 md:pl-20 md:p-8 text-center md:text-left">
                            <motion.a
                                href="#"
                                className="block text-3xl font-semibold text-blue-400 transition-colors hover:text-violet-50 md:text-7xl"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{
                                    ease: easeInOut,
                                    delay: 0.2,
                                    duration: 0.5,
                                }}
                            >
                                home.
                            </motion.a>
                            <motion.a
                                href="#"
                                className="block text-3xl font-semibold text-blue-400 transition-colors hover:text-violet-50 md:text-7xl"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{
                                    ease: "easeInOut",
                                    delay: 0.3,
                                    duration: 0.5,
                                }}
                            >
                                contact.
                            </motion.a>
                            <motion.a
                                href="#"
                                className="block text-3xl font-semibold text-blue-400 transition-colors hover:text-violet-50 md:text-7xl align-middle"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{
                                    ease: easeInOut,
                                    delay: 0.4,
                                    duration: 0.5,
                                }}
                            >
                                about.
                            </motion.a>
                        </div>
                        <motion.button
                            className="absolute bottom-2 right-2 flex items-center gap-2 rounded-full bg-blue-700 px-3 py-3 text-1xl uppercase text-blue-200 transition-colors hover:bg-white hover:text-blue-600 md:bottom-4 md:right-4 md:px-6 md:text-2xl"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{
                                ease: easeInOut,
                                delay: 0.5,
                                duration: 0.5,
                            }}
                        >
                            More Info
                        </motion.button>
                    </nav>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Burger;
