import React from "react";
import Form from "../components/Form";
import Burger from "../components/Burger";
import "../index.css";
import Navbar from "../components/Navbar";

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
                <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
                    <div className="w-60 h-60 bg-gradient-to-tr from-blue-500 to-blue-300 rounded-full animate-bounce"></div>
                    <div className="w-full h-1/2 absolute bg-white/10 backdrop-blur-lg bottom-0"></div>
                </div>
            </div>
        </>
    );
}
