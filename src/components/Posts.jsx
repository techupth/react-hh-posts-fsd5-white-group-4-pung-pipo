import { useState } from "react";
import { postsList } from "../Data/PostsList";

function Posts() {
  const [allPosts, setAllPosts] = useState(postsList);

  function like(postListIndex) {
    const updatedPosts = [...allPosts];
    updatedPosts[postListIndex].likes = updatedPosts[postListIndex].likes + 1;
    setAllPosts(updatedPosts);
  }

  function dislike(postListIndex) {
    const updatedPosts = [...allPosts];
    if (updatedPosts[postListIndex].likes > 0) {
      updatedPosts[postListIndex].likes = updatedPosts[postListIndex].likes - 1;
      setAllPosts(updatedPosts);
    }
  }
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {allPosts.map((post, index) => {
          return (
            <div key={index} className="post-item">
              <div className="post-header">
                <h2>{post.title}</h2>
                <div className="post-social-media-stats">
                  <span className="stats-topic">Likes: </span>
                  <span className="post-likes">{post.likes}</span>
                </div>
              </div>
              <p className="post-content">{post.content}</p>
              <div className="post-actions">
                <button className="like-button" onClick={() => like(index)}>
                  Like
                </button>
                <button
                  className="dislike-button"
                  onClick={() => dislike(index)}
                >
                  Dislike
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
