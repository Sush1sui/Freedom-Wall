import { NextFunction, Response, Request } from "express";
import User from "../models/User";
import "dotenv/config";
import Member from "../models/Member";

const handleRegister = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { email, password } = req.body;

        if (!process.env.secretPattern)
            throw new Error("Something went wrong, please speak with the devs");

        const regex = new RegExp(process.env.secretPattern);
        const verifyPattern = email.match(regex);

        if (!verifyPattern)
            throw new Error("Something went wrong, please speak with the devs");

        const member = await Member.findOne({ SN: verifyPattern[1] });

        if (!member) throw new Error("You are not a member of BSCS 3B");

        const user = await User.create({
            email,
            password,
            isAdmin: member.isAdmin,
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
