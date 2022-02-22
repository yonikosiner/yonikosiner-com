import { useEffect, useState } from "react";
import { getPostsByTag } from "../lib/posts";

export interface tags {
    name: string;
    id: string;
    slug: string;
}

export interface post {
    title: string;
    published_at: string;
    id: string;
    slug: string;
    excerpt: string;
    html: string;
    feature_image: string;
    reading_time: number;
    tags: tags[];
}

export default function usePostByTag(tag: string, apiKey: string) {
    const [posts, setPosts] = useState<post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://kosiner.codes/ghost/api/v3/content/posts/?key=${apiKey}&filter=tag:${tag}`)
        .then(res => res.json())
        .then(data => setPosts(data.posts))
        .finally(() => setLoading(false))
        .catch(err => console.log(err));
    }, []);

    if (loading) {
        null
    };

    return posts;
};
