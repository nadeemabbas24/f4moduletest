import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

function Detial() {
    const location = useLocation();
    const posts = useSelector(state=>state.posts)
    console.log("location",location)
    const post = posts.filter(item=>{
        if(item.id === location.state.id)
           return item
    })
   
  return (
    <div>
        <h3>Details Page For Post With ID {location.state.id}</h3>
        <img src={post[0].id}/>
        <h3>User ID: {post[0].id}</h3>
        <h3>Title: {post[0].title}</h3>
        <h3>Post: {post[0].body}</h3>
    </div>
  )
}

export default Detial