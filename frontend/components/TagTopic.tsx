import React from "react";
import Link from "next/link";
import { post } from "../pages/blog/topics";

export interface tag {
    name: string;
    id: string;
    slug: string;
}

export default function TagTopic({ tag, posts }: { tag: tag, posts: post[] }) {
    return (
        <div>
            <ul id={tag.id} key={tag.id}>
                <li>
                    <a href={`blog/topics/${tag.slug}`}>{tag.name}</a>
                    {posts.map((post) => {
                        // One line to rule them all, one line to find them, one line to bring them all, and in the darkness bind them.
                        const tagComp = post.tags.find((tagComp) => tagComp.id === tag.id);

                        if (tagComp) {
                            return (
                                <div key={post.id} style={{ paddingLeft: "10px"}}>
                                    <Link href={`/blog/posts/${post.slug}`}>
                                        <a>{post.title}</a>
                                    </Link>
                                </div>
                               )
                            };
                        }
                    )}
                </li>
            </ul>
        </div>
    )
}
