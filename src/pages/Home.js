import React, { useEffect, useState } from 'react'
import Post from '../components/Post';
import "./home.css";
import {useNavigate} from 'react-router-dom';
import Detial from './Detial';
import {useSelector } from 'react-redux';
import store from '../store';

function Home() {
       const posts = useSelector((state)=>state.posts);
       
       const navigate = useNavigate();
            
       function clickHandler(id){       
                console.log("clickHandler",id);
                
                 navigate('/detail',{state:{id:id}});
                }

 return (
    <div className='container'>
        {   
            store.getState().posts &&
            (store.getState().posts).map(obj=>{            
                return <Post key={obj.id} obj={obj} click={()=>clickHandler(obj.id)}/>
             })    
                       
        }
    </div>
  )
}

export default Home