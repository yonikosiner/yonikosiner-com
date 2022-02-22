import Head from "next/head";
import WhatsAComputer from "../../public/images/Yoni_on_ipad_typing.png";
//import style from "../../styles/topics.module.scss";
import { getTags } from "../../lib/posts";
import usePostByTag from "../../hooks/usePostByTag";
import Link from "next/link";

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

export interface tags {
    name: string;
    id: string;
    slug: string;
}

export default function Topics({ tags, apiKey }: { tags: tags[], apiKey: string }) {
    return (
        <div>
            <Head>
                <title>Yoni Kosiner | Topic Page</title>
                <meta name="Topic page" content="Topics..." />
            </Head>
            {/*Hero*/}
            <div>
                <h1>Articles</h1>
                <p>I like to write about Tech, Productivity, Books and coding.</p>
                <img
                    style={{ objectFit: "cover" }}
                    width="690"
                    height="460"
                    src={WhatsAComputer.src}
                    alt="Yoni on ipad"
                />
            </div>
            {/*Topics*/}
            <div>
                <h2>️️✍️ Topic Areas</h2>
                {tags.map((tag) => {
                    const posts = usePostByTag(tag.name, apiKey);

                    return (
                        <ul id={tag.id} key={tag.id}>
                            <li>
                                <Link href={`/blog/topics/${tag.slug}`}>
                                    <a>{tag.name}</a>
                                </Link>
                            </li>
                            {!posts.length && <p>Loading...</p>}
                            {posts.slice(0,2).map((post: post) => {
                                return (
                                    <li key={post.id} style={{ marginLeft: "10px" }} >
                                        <Link href={`/blog/posts/${post.slug}`}>
                                            <a>{post.title}</a>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                       );
                    })}
            </div>
        </div>
    )
};

export async function getServerSideProps() {
    const ghostApiKey = process.env.GHOST_API_KEY;
    const tags = await getTags();

    return {
        props: {
            apiKey: ghostApiKey,
            tags: tags,
        },
    }
}
