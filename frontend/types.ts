export interface tweet {
    id: string;
    text: string;
    public_metrics: {
        retweet_count: number;
        reply_count: number;
        like_count: number;
        quote_count: number;
    };
};

export interface Repositories {
    name: string;
    description: string;
    html_url: string;
    fork?: boolean;
}
