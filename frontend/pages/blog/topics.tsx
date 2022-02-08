import Head from "next/head";

export interface post {
    title: string;
    published_at: string;
    id: string;
    slug: string;
    excerpt: string;
    html: string;
    feature_image: string;
}

export default function Topics() {
    return (
        <div>
            <Head>
                <title>Yoni Kosiner | Topic Page</title>
                <meta name="Topic page" content="Topics..." />
            </Head>

            <h1>Articles</h1>
            <p>I like to write about Tech, Productivity, Books and coding.</p>
            <img src="../../public/images/What's a computer?.jpeg" alt="Yoni at iPad typing blog" />
        </div>
    )
};

