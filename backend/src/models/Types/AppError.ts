import { MongoServerError } from "mongodb";

export interface AppError extends MongoServerError {
    status?: number;
    code?: number;
}
