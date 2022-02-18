import Head from "next/head";
import Link from "next/link";
import WhatsAComputer from "../../public/images/Yoni_on_ipad_typing.png";
import style from "../../styles/topics.module.scss";
import { getPosts, getTags } from "../../lib/posts";

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

//@ts-ignore
export default async function Topics({ posts, tags}: { posts: post[], tags: tags[] }) {
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
                {tags[0] === null && <p>Loading...</p>}
                {Array.isArray(tags) &&
                    tags.map((tag) => (
                        <ul>
                            <li>
                                <a href={`blog/topics/${tag.slug}`}>{tag.name}</a>
                                {posts.map((post) => {
                                    const tagComp = post.tags.find(
                                        (tagComp) => tagComp.id === tag.id
                                    );

                                    if (tagComp) {
                                    return (
                                        <ul style={{ paddingLeft: "10px" }}>
                                            <li>
                                                <Link href={`/blog/posts/${post.slug}`}>
                                                    <a>{post.title}</a>
                                                </Link>
                                            </li>
                                        </ul>
                                        );
                                    }
                                })}
                            </li>
                        </ul>
                    ))
                }
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
