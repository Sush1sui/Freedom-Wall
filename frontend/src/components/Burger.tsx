import React from "react";
import { useState } from "react";
import postIt from "../assets/images/post-it.png";

const Burger = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div
            className="fixed z-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 shadow-lg shadow-blue-800/20 transition-all duration-300"
            style={
                isOpen
                    ? {
                          top: "16px",
                          right: "16px",
                          width: "calc(50% - 32px)",
                          height: "calc(-32px + 100vh)",
                      }
                    : {
                          top: "16px",
                          right: "16px",
                          width: "80px",
                          height: "80px",
                      }
            }
        >
            <button
                className="group fixed right-4 top-4 z-50 h-20 w-20 bg-white/0 transition-all hover:bg-white/20 rounded-x"
                onClick={() => setIsOpen((o) => !o)}
            >
                <span
                    className="absolute block h-1 w-10 bg-white"
                    style={{
                        left: "50%",
                        top: "35%",
                        transform:
                            "translateX(-50%) translateY(-50%) rotate(0deg) translateZ(0px)",
                    }}
                ></span>
                <span
                    className="absolute block h-1 w-10 bg-white"
                    style={{
                        left: "50%",
                        top: "50%",
                        transform:
                            "translateX(-50%) translateY(-50%) rotate(0deg) translateZ(0px)",
                    }}
                ></span>
                <span
                    className="absolute block h-1 w-5 bg-white"
                    style={{
                        left: "calc(50% + 10px)",
                        bottom: "30%",
                        transform:
                            "translateX(-50%) translateY(-50%) rotate(0deg) translateZ(0px)",
                    }}
                ></span>
            </button>
            {isOpen ? (
                <nav className="fixed right-4 top-4 z-40 h-[calc(100vh_-_32px)] w-[calc(50%_-_32px)] overflow-hidden font-poppins">
                    <a
                        href="#"
                        className="grid h-20 w-20 place-content-center rounded-br-xl rounded-tl-xl bg-white transition-colors hover:bg-blue-50"
                    >
                        <img src={postIt} alt="note icon" className="w-10" />
                    </a>
                    <div className="space-y-4 p-12 pl-4 md:pl-20">
                        <a
                            href="#"
                            className="block text-5xl font-semibold text-blue-400 transition-colors hover:text-violet-50 md:text-7xl"
                        >
                            home.
                        </a>
                        <a
                            href="#"
                            className="block text-5xl font-semibold text-blue-400 transition-colors hover:text-violet-50 md:text-7xl"
                        >
                            contact.
                        </a>
                        <a
                            href="#"
                            className="block text-5xl font-semibold text-blue-400 transition-colors hover:text-violet-50 md:text-7xl"
                        >
                            about.
                        </a>
                    </div>
                    <button className="absolute bottom-2 right-2 flex items-center gap-2 rounded-full bg-blue-700 px-3 py-3 text-4xl uppercase text-blue-200 transition-colors hover:bg-white hover:text-blue-600 md:bottom-4 md:right-4 md:px-6 md:text-2xl">
                        <span className="hidden md:block">More Info</span>
                        <svg
                            stroke="currentColor"
                            fill="none"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                </nav>
            ) : (
                ""
            )}
        </div>
    );
};

export default Burger;
