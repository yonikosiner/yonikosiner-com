import useYouTube from "../hooks/useYouTube";
import { YouTubeVideo } from "../types";


export default function YouTube() {
    const youtube = useYouTube();
    return (
        <div>
        {!youtube.length && <p>Loading...</p>}
        {youtube.map((video: YouTubeVideo, index) => (
            <div key={index}>
                <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target=" _blank">
                    <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                    <h3 style={{ fontSize: "25px", letterSpacing: "2px", fontWeight: "bolder" }}>{video.snippet.title}</h3>
                </a>
            </div>
        ))}
        </div>
    );
};
