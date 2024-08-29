import React from "react";
import logoImage from "../assets/images/Paper-notes.svg";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import { Link } from "react-router-dom";

type Props = { type: "login" | "register" };

const Form = ({ type }: Props) => {
    return (
        <div className="flex w-2/3 min-h-full flex-col justify-center py-4 px-8 bg-white drop-shadow-lg rounded-lg">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto hover:scale-125 transition-all duration-300"
                    src={logoImage}
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    {
                        // conditionally render for login or register
                        type === "login"
                            ? "Sign in to your account"
                            : "Register your account"
                    }
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <Input type="email" label="Email address" required={true} />

                    <Input type="password" label="Password" required={true}>
                        {
                            // render child if on login page
                            type === "login" && (
                                <div className="text-sm">
                                    <a
                                        href="#"
                                        className="font-semibold text-blue-600 hover:text-blue-500"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                            )
                        }
                    </Input>

                    <SubmitButton
                        name={
                            // conditionally render for login or register
                            type === "login" ? "Sign in" : "Register"
                        }
                    />
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    {
                        // conditionally render for login or register
                        type === "login"
                            ? "Don't have an account?"
                            : "Have an account?"
                    }
                    <Link
                        to={
                            // conditionally render for login or register
                            type === "login" ? "/register" : "/login"
                        }
                        className="font-semibold leading-6 text-blue-600 hover:text-blue-500 ml-1"
                    >
                        {
                            // conditionally render for login or register
                            type === "login" ? "Register here" : "Sign in here"
                        }
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Form;
