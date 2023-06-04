import React from 'react'
import './post.css'

function Post(props) {
    let title = (props.obj.title).substring(0, 20)+"....";
    let body = (props.obj.body).substring(0, 60)+" Read more"+"....";
  return (
    <div className='card' onClick={props.click}>
        <img src= { `https://picsum.photos/200?random=${props.obj.id}`}/>
        <p>User ID: {props.obj.id}</p>
        <p>Title: {title}</p>
        <p style={{textAlign:'left'}}>Body: {body}</p>
    </div>
  )
}

export default Post