import Head from "next/head";
import Link from "next/link";
import { getPosts } from "../../lib/posts";
import { parseURL } from "../../utils/parseURL";

export interface post {
    title: string;
    published_at: string;
    id: string;
    slug: string;
    excerpt: string;
    html: string;
    feature_image: string;
}

export default function Topics({ posts }: { posts: post[] }) {
    return (
        <div>
            <Head>
                <title>Yoni Kosiner | Topic Page</title>
                <meta name="Topic page" content="Topics..." />
            </Head>

            <h1>Topics</h1>
            <ul>
                {!posts.length && <p>Loading...</p>}
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                            <a>
                                <img style={{ width: "300px", height: "200px" }} src={`https://kosiner.codes/${parseURL(post.feature_image)}`} alt="blog image"/>
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};

//@ts-ignore
Topics.getInitialProps = async ({ res }) => {
    if (res) {
        const cacheAge = 60 * 60 * 12
        res.setHeader('Cache-Control', `public,s-maxage=${cacheAge}`)
    }

    const posts = await getPosts();
    return {
        posts
    }
}
