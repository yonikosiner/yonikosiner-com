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

export interface post {
    lastFetch: number;
    thumbnail?: any;
    caption?: string;
    url?: string;
    id?: number;
    posts: {
        biggie: string;
        thumbnail: string;
        url: string;
        caption: string;
        id: string;
    }[];
};

export interface story {
    media_preview: string;
    display_url: string;
};

export interface YouTubeVideo {
    id: {
        videoId: string;
    };
    snippet: {
        title: string;
        description: string;
        thumbnails: {
            medium: {
                url: string;
            };
        };
    };
};
