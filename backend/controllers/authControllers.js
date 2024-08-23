import { handleErrors, isMember } from "../middleware/authMiddleware.js";
import User from "../models/User.js";

const handleRegister = async (req, res) => {
    try {
        const { email, password } = req.body;

        const isValidMember = await isMember(email);

        if (isValidMember === "valid") {
            const user = await User.create({ email, password });
            return res.status(201).json({ user });
        }

        throw Error(isValidMember);
    } catch (error) {
        const errors = handleErrors(error);
        res.status(400).json({ errors });
    }
};

const handleLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        // uses static method
        // check User.js at /backend/models/User.js
        const user = await User.login(email, password);
        res.status(200).json({ message: `${user.email} has logged in` });
    } catch (error) {
        const errors = handleErrors(error);
        res.status(400).json({ errors });
    }
};

export { handleRegister, handleLogin };
