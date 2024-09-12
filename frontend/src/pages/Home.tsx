import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import OutlinedCard from "../components/OutlinedCard";
import { Box } from "@mui/material";

type PostType = {
    title: string;
    body: string;
    createdAt: string;
};

export default function Home() {
    const [posts, setPosts] = useState<PostType[]>([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const res = await fetch("http://localhost:3000/posts");
                if (!res.ok)
                    throw new Error(
                        "There is something wrong with fetching posts"
                    );
                const data = await res.json();
                console.log(data);
                setPosts(data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchPosts();
    }, []);

    return (
        <>
            <Navbar />
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2, // Adds space between cards
                    justifyContent: "start", // Align items in the center
                    padding: 4, // Optional padding around the container
                }}
            >
                {
                    // RENDERS POST
                    posts.length ? (
                        posts.map((post) => (
                            <OutlinedCard
                                title={post.title}
                                date={post.createdAt}
                                body={post.body}
                            />
                        ))
                    ) : (
                        <div>There are no posts</div> // ELSE STATEMENT IF POST LENGTH === 0
                    )
                }
            </Box>
        </>
    );
}
