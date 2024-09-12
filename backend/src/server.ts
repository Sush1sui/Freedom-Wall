import "dotenv/config";
import express, { NextFunction, Response, Request } from "express";
import mongoose from "mongoose";
import authRouter from "./routes/authRoutes";
import postRoutes from "./routes/postRoutes";
import { handleErrors } from "./middleware/authMiddleware";
import { AppError } from "./models/Types/AppError";
import cors from "cors";

// IPv6 address
// mongodb://localhost:27017/freedom-wall-db
mongoose
    .connect("mongodb://127.0.0.1:27017/freedom-wall-db")
    .then(() => console.log("Connected to DB"))
    .catch((e) => console.log("DB connection failed", e));

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", authRouter);
app.use("/posts", postRoutes);

// global error handler
app.use((err: AppError, _req: Request, res: Response, _next: NextFunction) => {
    const errors = handleErrors(err);
    if (err.code === 11000) {
        errors["email"] = "Email already exists";
    }
    if (err.message && !errors.message && err.code !== 11000) {
        errors["message"] = err.message;
    }
    res.status(err.status || 500).json({
        errors,
    });
});

app.listen(process.env.PORT, () =>
    console.log(`Listening to http://localhost:${process.env.PORT}`)
);
