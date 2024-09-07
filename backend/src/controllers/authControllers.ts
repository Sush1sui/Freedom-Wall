import { NextFunction, Response, Request } from "express";
import User from "../models/User";
import "dotenv/config";

const handleRegister = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { email, password } = req.body;

        const user = await User.create({
            email,
            password,
        });
        return res.status(201).json({ user });
    } catch (error) {
        return next(error);
    }
};

const handleLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        // uses static method
        // check User.js at /backend/models/User.js
        const user = await User.login(email, password);
        res.status(200).json({ message: `${user.email} has logged in` });
    } catch (error) {
        return next(error);
    }
};

export { handleRegister, handleLogin };
