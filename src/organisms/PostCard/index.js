import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCommentPost } from "../../api";
import { setCommentsPost } from "../../actions";

import "./index.css";

function PostCard({ post, showModal, setShowModal }) {
  const dispatch = useDispatch();

  const OngetCommentPost = async (idPost) => {
    const commentPostRes = await getCommentPost(idPost);
    dispatch(setCommentsPost(commentPostRes.data));
  };

  const onShowCommentPost = (idPost) => {
    OngetCommentPost(idPost);
    setShowModal(true);
  };

  const userPost = post.owner;
  return (
    <div className="post-card" onClick={() => onShowCommentPost(post.id)}>
      <div className="post-card-user">
        <h3>
          {userPost.firstName}
          <span> </span>
          {userPost.lastName}
        </h3>
      </div>
      <div className="post-card-post">
        <img src={post.image} alt="imgPost" className="" />
      </div>
      <div className="post-card-tags">
        <h4>Tags:</h4>
        <div className="post-card-tag">
          {post && post.tags.map((tag) => <p key={tag}>{tag}</p>)}
        </div>
      </div>
    </div>
  );
}

export { PostCard };
