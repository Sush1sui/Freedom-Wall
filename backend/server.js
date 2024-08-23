import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/authRoutes.js";
import { handleErrors } from "./middleware/authMiddleware.js";

// IPv6 address
// mongodb://localhost:27017/freedom-wall-db
mongoose
    .connect("mongodb://127.0.0.1:27017/freedom-wall-db")
    .then(() => console.log("Connected to DB"))
    .catch((e) => console.log("DB connection failed", e));

const app = express();

app.use(express.json());

app.use("/", authRouter);

// global error handler
app.use((err, req, res, next) => {
    const errors = handleErrors(err);
    res.status(err.status || 500).json({
        errors,
    });
});

app.listen(process.env.PORT, () =>
    console.log(`Listening to http://localhost:${process.env.PORT}`)
);
