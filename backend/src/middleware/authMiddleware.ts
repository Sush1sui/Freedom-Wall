import "dotenv/config";
import mongoose from "mongoose";
import { MongoServerError } from "mongodb";

type HandleErrorType = {
    message?: string;
    email?: string;
    password?: string;
};
const handleErrors = (
    err: MongoServerError | mongoose.Error.ValidationError
) => {
    let errors: HandleErrorType = {};

    if (err.message === "Incorrect credentials") {
        errors["message"] = err.message;
        return errors;
    }

    if (
        err instanceof mongoose.Error.ValidationError &&
        err.message.includes("User validation failed")
    ) {
        Object.values(err.errors).forEach((error) => {
            if (error.path === "email" || error.path === "password") {
                errors[error.path] = error.message;
            }
        });
        return errors;
    }

    return errors;
};

export { handleErrors };
