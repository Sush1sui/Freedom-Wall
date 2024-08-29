import React from "react";
import logoImage from "../assets/images/Paper-notes.svg";
import Input from "./Input";
import SubmitButton from "./SubmitButton";

const Form = () => {
    return (
        <div className="flex w-2/3 min-h-full flex-col justify-center py-4 px-8 bg-white drop-shadow-lg rounded-lg">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto hover:scale-125 transition-all duration-300"
                    src={logoImage}
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <Input type="email" label="Email address" required={true} />

                    <Input type="password" label="Password" required={true}>
                        <div className="text-sm">
                            <a
                                href="#"
                                className="font-semibold text-blue-600 hover:text-blue-500"
                            >
                                Forgot password?
                            </a>
                        </div>
                    </Input>

                    <SubmitButton name="Sign in" />
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a student?
                    <a
                        href="#"
                        className="font-semibold leading-6 text-blue-600 hover:text-blue-500 ml-1"
                    >
                        Register here
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Form;
