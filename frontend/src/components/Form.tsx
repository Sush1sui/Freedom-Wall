import React, { useState } from "react";
import logoImage from "../assets/images/Paper-notes.svg";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import { Link, useNavigate } from "react-router-dom";
import ErrorContainer from "./ErrorContainer";
import ErrorModal from "./ErrorModal";

type Props = { type: "login" | "register" };
type formDataType = {
    email: string;
    password: string;
};

const Form = ({ type }: Props) => {
    const [formData, setFormData] = useState<formDataType>({
        email: "",
        password: "",
    });
    const [invalidCredentials, setInvalidCredentials] =
        useState<boolean>(false);
    const [errors, setErrors] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setInvalidCredentials(false);
        setErrors([]);

        try {
            const res = await fetch(`http://localhost:3000/${type}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                const errorMessages: string[] = [];
                const { message, email, password } = data.errors;

                if (data.errors) {
                    if (message) errorMessages.push(message);
                    if (email) errorMessages.push(email);
                    if (password) errorMessages.push(password);
                } else {
                    errorMessages.push("An unknown error occurred");
                }

                setErrors((prev) => [...prev, ...errorMessages]);
                if (type === "login") setInvalidCredentials(true);
                throw new Error(JSON.stringify(data.errors));
            }

            console.log(data);
            setIsLoading(false);

            if (type === "login") navigate("/");
        } catch (error) {
            if (type === "login") setInvalidCredentials(true);
            console.log(error);
            setIsLoading(false);
        }
    };

    return (
        <>
            {
                // need loading animation XD
                isLoading && (
                    <>
                        <div className="absolute inset-0 w-full h-full bg-slate-600 text-white">
                            Loading
                        </div>
                    </>
                )
            }
            <ErrorModal errorSubmission={invalidCredentials} />
            <div className="flex w-2/3 min-h-full flex-col justify-center py-4 px-8 bg-white shadow-lg shadow-black-800/20 rounded-lg">
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
                    <ErrorContainer errors={errors} />
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <Input
                            type="email"
                            label="Email address"
                            required={true}
                            value={formData.email}
                            handleOnChange={(e) => handleOnChange(e)}
                        />

                        <Input
                            type="password"
                            label="Password"
                            required={true}
                            value={formData.password}
                            handleOnChange={(e) => handleOnChange(e)}
                        >
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
                                type === "login"
                                    ? "Register here"
                                    : "Sign in here"
                            }
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Form;
