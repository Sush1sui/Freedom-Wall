import React from "react";
import { CiWarning } from "react-icons/ci";

type Props = {
    errors: string[];
};

export default function ErrorContainer({ errors }: Props) {
    if (errors.length === 0) return null;
    return (
        <ul>
            {errors.map((message, i) => {
                return (
                    <li
                        key={i}
                        className="bg-red-200 px-3 py-2 mt-3 rounded-md"
                    >
                        <div className="flex items-center gap-2">
                            <CiWarning className="text-red-700" />
                            <h3 className="text-red-700">{message}</h3>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}
