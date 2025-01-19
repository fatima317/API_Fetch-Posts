"use client";

import { useState, useEffect } from "react";

export default function FetchPostsPage() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/external") // Adjust to your API folder structure
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setPosts(data.data);
                } else {
                    setError(data.message);
                }
            })
            .catch(() => setError("An unexpected error occurred"))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-xl text-gray-700">Loading...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Posts</h1>
            {error ? (
                <p className="text-center text-red-600">{error}</p>
            ) : (
                <>
                    {posts.length === 0 ? (
                        <p className="text-center text-gray-600">No posts available.</p>
                    ) : (
                        <ul className="space-y-4">
                            {posts.map((post: { id: number; title: string }) => (
                                <li
                                    key={post.id}
                                    className="bg-white p-4 rounded-lg shadow-lg hover:bg-gray-50 transition"
                                >
                                    {post.title}
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            )}
        </div>
    );
}
