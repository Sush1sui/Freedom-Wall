import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            keyframes: {
                "fade-in-down": {
                    "0%": {
                        opacity: 0,
                        transform: "translate3d(0, -15%, 0)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translate3d(0, 0, 0)",
                    },
                },
            },
            animation: {
                fadeindown: "fade-in-down 1s ease-in 0.25s 1",
            },
        },
    },
    plugins: [],
};
