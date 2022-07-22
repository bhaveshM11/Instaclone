import React, { useEffect, useState } from "react";
import './PostView.css';
import PostCard from "./PostCard";
import Header from "./Header"

const PostView = ()=>{
  const [post , setpost] = useState([]);
  
  
  useEffect(()=>{
    
    fetch('https://instaclone-server-demo.herokuapp.com/postview', {
    method:'GET'
  })
    .then((res)=> res.json())
    .then((data)=> setpost(data.data))
    .catch((err)=>{console.log(err)})
  },[post])
   
   
    return (
        <>
        <Header/>
     <div className="posts">
        <div>
          {!post.length && <p className="design">Loading !!!!</p>}
        {post.map((data ,idx)=>{
              return (
                <div className="posts_card">
                <PostCard key={idx} info={data} ></PostCard>
                </div>
              )
            }).reverse()}

        </div>
      </div>
        </>
    )
}

export default PostView;