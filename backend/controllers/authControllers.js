import { handleErrors, isMember } from "../middleware/authMiddleware.js";
import User from "../models/User.js";

const handleRegister = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.create({ email, password });
        return res.status(201).json({ user });
    } catch (error) {
        next(error);
    }
};

const handleLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        // uses static method
        // check User.js at /backend/models/User.js
        const user = await User.login(email, password);
        res.status(200).json({ message: `${user.email} has logged in` });
    } catch (error) {
        next(error);
    }
};

export { handleRegister, handleLogin };
