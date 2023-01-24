import React from "react";
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className = {s.item}>
      <img src="https://avatarzo.ru/wp-content/uploads/squid-game-kukla.jpg"></img>
      {props.message}
      <div>
      <span>Like</span> {props.likesCount}
      </div>
    </div>
  )
}

export default Post;