import React, { useState, useEffect } from "react";
import { post } from "../types";
import { story } from "../types";
import style from "../styles/instagram.module.scss";

function converIGtoJPG(base64data: any) {
    const jpegtpl =
        '/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsaGikdKUEmJkFCLy8vQkc/Pj4/R0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0cBHSkpNCY0PygoP0c/NT9HR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR//AABEIABQAKgMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AA==';
    const t = atob(base64data);
    const p = t.slice(3).split('');
    const o = t
        .substring(0, 3)
        .split('')
        .map((e) => e.charCodeAt(0));
    const c = atob(jpegtpl).split('');
    c[162] = String.fromCharCode(o[1]);
    c[160] = String.fromCharCode(o[2]);
    return base64data
        ? `data:image/jpeg;base64,${btoa(c.concat(p).join(''))}`
        : null;
}

function useInstagram() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`/api/instagram`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setPosts(data);
      })
      .catch((err) => {
        setLoading(false);
        setPosts([]);
      });
  }, []);
  return { posts, loading };
}

function useInstagramStories() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`/api/instagramStory`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        setPosts([]);
      });
  }, []);
  return posts;
}

function Stories() {
  const stories = useInstagramStories();
  if (!stories.length) return null;
  return (
    <>
      <h4 style={{ textAlign: "left", fontSize: "25px", letterSpacing: "2px", fontWeight: "bolder" }}>Stories</h4>
      <a href="https://www.instagram.com/stories/kosiner.codes/">
        {stories.map((story: story) => (
          <img
            className="story"
            key={story.media_preview}
            src={`https://images.weserv.nl/?url=${encodeURIComponent(

              story.display_url
            )}&h=100`}
            alt="@kosiner.codes Instagram Story"
            style={{
              backgroundImage: `url(${converIGtoJPG(story.media_preview)})`,
            }}
          />
        ))}
      </a>
    </>
  );
}

export default function Instagram() {
    const { loading, posts: gramz } = useInstagram();
    return (
        <div>
        {loading && <p>One sec, getting the gramz...</p>}
        <Stories />
        {gramz.length ? <h4 style={{ textAlign: "left", fontSize: "25px", letterSpacing: "2px", fontWeight: "bolder" }}>Posts</h4> : null}
        <div className={style.insta}>
        {Array.isArray(gramz) &&
        gramz.map((gram: post) => (
            <a href={gram.url} key={gram.id}>
                <img
                style={{width: "200px", height: "180px"}}
                src={`https://images.weserv.nl/?url=${encodeURIComponent(
                gram.thumbnail)}&w=230`}
                alt={gram.caption}
                />
            </a>
        ))}
        </div>
    </div>
    );
};
