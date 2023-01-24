import React from "react";
import s from './Profile.module.css';
import  MyPosts from './Profile/MyPosts/MyPosts';

const Profile = () => {
  return <div>
            <div>
            <img className = {s.imgContent} src='https://img.freepik.com/premium-photo/gypsophila-flowers-on-white-background-delicate-background-for-cards_93853-352.jpg'></img>
            </div>
            <div>
              <img className= {s.avatarFoto} src='https://trikky.ru/wp-content/blogs.dir/1/files/2019/09/12/ba1853fd936291cc1c95f2de126420f0.png'></img>
              + description
            </div>
          <MyPosts/>
          </div>
}

export default Profile;