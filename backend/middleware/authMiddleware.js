import Member from "../models/Member.js";

const isMember = async (req, res, next) => {
    const { email } = req.body;
    try {
        if (email) {
            const regex = new RegExp(process.env.secretPattern);
            const verifyPattern = email.match(regex);

            if (verifyPattern) {
                const match = await Member.findOne({ SN: verifyPattern[1] });
                if (match) {
                    console.log(
                        `${match.firstname} ${match.lastname} is verified as a true member`
                    );
                    return next();
                }
                return next(Error("Incorrect credentials"));
            }
            return next(Error("Incorrect credentials"));
        }
        // email will be catched later, this is useless
        next();
    } catch (error) {
        console.log(error);
    }
};

const handleErrors = (err) => {
    let errors = {};

    if (err.message === "Incorrect credentials")
        errors["message"] = err.message;

    if (err.code === 11000) {
        errors["email"] = "Email already exists";
        return errors;
    }

    if (err.message.includes("user validation failed")) {
        // deconstruct "properties" so that
        // we wont type "error.properties.<key>"
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
};

export { handleErrors, isMember };
