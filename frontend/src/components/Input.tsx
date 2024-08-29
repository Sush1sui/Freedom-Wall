import React from "react";

type Props = {
    type: string; // text, email, password, etc
    label: string; // label
    required: boolean;
    children?: React.ReactNode; // children type
};

export default function Input({ type, label, required, children }: Props) {
    return (
        <div>
            {type === "password" ? (
                <div
                    className={
                        type === "password"
                            ? "flex items-center justify-between"
                            : ""
                    }
                >
                    <label
                        htmlFor={type}
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        {label}
                    </label>
                    {children}
                </div>
            ) : (
                <label
                    htmlFor={type}
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    {label}
                </label>
            )}
            <div className="mt-2">
                <input
                    id={type}
                    name={type}
                    type={type}
                    required={required}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                />
            </div>
        </div>
    );
}
