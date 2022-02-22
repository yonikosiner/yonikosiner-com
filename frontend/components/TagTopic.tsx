import Link from "next/link";
import { post } from "../pages/blog/topics";
import { getPostsByTag } from "../lib/posts";

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
                    {posts.slice(0,2).map((post: post) => (
                        <Link href={`/blog/topics/${tag.slug}/${post.slug}`} key={post.id}>
                            <a>{post.title}</a>
                        </Link>
                    ))}
                </li>
            </ul>
        </div>
    )
}

//@ts-ignore
TagTopic.getInitialProps = async ({ query }) => {
    const tag: tag = query.tag;
    const posts = await getPostsByTag(tag.name);
    return { tag, posts };
}
