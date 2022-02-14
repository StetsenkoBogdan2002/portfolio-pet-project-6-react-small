import React from "react";

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong className="post-title">
          {props.number}. {props.post.title}
        </strong>
        <div className="post-subtitle">{props.post.descr}</div>
      </div>
      <div className="post__btns">
        <button onClick={() => props.removePost(props.post)}>Удалить</button>
      </div>
    </div>
  );
};

export default PostItem;
