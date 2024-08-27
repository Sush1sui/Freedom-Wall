import mongoose, { Error } from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";
import { CustomUserType, UserModelType } from "./Types/UserType";
const { isEmail } = validator;

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
        validate: [isEmail, "Please enter a valid email"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [12, "Password should be at least 12 characters"],
    },
});

// runs after doc is saved to db
userSchema.post("save", function (doc, next) {
    console.log(`${doc.email} has registered` /*doc*/);
    next();
});

// runs before doc is saved to db
userSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 17);
    next();
});

// static method to login user
userSchema.statics.login = async function (
    email,
    password
): Promise<CustomUserType> {
    // refer to user model, not the instance
    const user = await this.findOne({ email });

    if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            console.log(`${user.email} logged in`);
            return user;
        }
        throw new Error("Incorrect credentials");
    }
    throw new Error("Incorrect credentials");
};

const User = mongoose.model<CustomUserType, UserModelType>("User", userSchema);

export default User;
