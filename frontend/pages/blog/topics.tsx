import Head from "next/head";
import Link from "next/link";
import WhatsAComputer from "../../public/images/Yoni_on_ipad_typing.png";
import style from "../../styles/topics.module.scss";
import { getPosts, getTags } from "../../lib/posts";
import { useRef } from "react";

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

export default function Topics({ posts, tags}: { posts: post[], tags: tags[] }) {
    const tagsRef = useRef(tags);
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
                {tags.map((tag) => (
                    //@ts-ignore
                    <ul id={tag.id} key={tag.id}>
                        <li>
                            <a href={`blog/topics/${tag.slug}`}>{tag.name}</a>
                            {posts.map((post) => {
                                // One line to rule them all, one line to find them, one line to bring them all, and in the darkness bind them.
                                const tagComp = post.tags.find((tagComp) => tagComp.id === tag.id);

                                if (tagComp) {
                                    const tag = document.getElementById(tag.id);
                                    if (tagsRef.current.length < 2) {
                                        return (
                                            <div key={post.id} style={{ paddingLeft: "10px"}}>
                                                <Link href={`/blog/posts/${post.slug}`}>
                                                    <a>{post.title}</a>
                                                </Link>
                                            </div>
                                           )
                                        };
                                    }
                                }
                            )}
                        </li>
                    </ul>
                ))}
            </div>
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
    const tags = await getTags();

    return {
        tags: tags,
        posts: posts
    }
}
