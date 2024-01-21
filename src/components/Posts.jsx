import { useState } from "react";
import { postData } from "../Data/postData";

function Posts() {
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {postData.map((item) => {
          const [like, setLike] = useState(item.likes);

          function addLike() {
            setLike(like + 1);
          }

          function subStactLike() {
            if (like >= 1) {
              setLike(like - 1);
            }
          }

          return (
            <div className="post-item" key={item.id}>
              <div className="post-header">
                <h2>Post Title: {item.title}</h2>
                <div className="post-social-media-stats">
                  <span className="stats-topic">Likes: </span>
                  <span className="post-likes">{like}</span>
                </div>
              </div>
              <p className="post-content">{item.content}</p>
              <div className="post-actions">
                <button className="like-button" onClick={addLike}>
                  Like
                </button>
                <button className="dislike-button" onClick={subStactLike}>
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
