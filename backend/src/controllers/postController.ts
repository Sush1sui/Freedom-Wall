import { Request, Response, NextFunction } from "express";
import Post from "../models/Post";

const getPosts = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const posts = await Post.find({});

        return res.status(200).json(posts);
    } catch (error) {
        return next(error);
    }
};

export { getPosts };
