import React from "react";
import Form from "../components/Form";
import Burger from "../components/Burger";
import "../index.css";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function Register() {
    return (
        <>
            <Navbar />
            <div className="flex w-full h-screen">
                <div className="w-full flex items-center justify-center lg:w-1/2 py-28">
                    <Form type="register" />
                    <Burger
                        width="calc(50% - 32px)"
                        height="calc(-32px + 100vh)"
                    />
                </div>
                <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-100">
                    <motion.div
                        className="w-40 h-40 bg-gradient-to-tr from-blue-500 to-blue-300 rounded-full"
                        animate={{
                            scale: [1, 2, 2, 1, 1],
                            rotate: [0, 0, 180, 180, 0],
                            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 1,
                        }}
                    />
                    <div className="w-full h-1/2 absolute bg-white/10 backdrop-blur-lg bottom-0"></div>
                </div>
            </div>
        </>
    );
}
