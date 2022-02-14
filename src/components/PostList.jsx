import React from "react";
import PostItem from "./PostItem";

function PostList(props) {
  return (
    <div>
      <h1>{props.mainTitle}</h1>
      {props.posts.map((post, index) => (
        <PostItem removePost={props.removePost} number={index + 1} key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
