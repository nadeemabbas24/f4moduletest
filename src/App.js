import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Detial from './pages/Detial';
import Home from './pages/Home';

function App() {

  const dispatch = useDispatch();
   
    useEffect(()=>{
        fetchData()
        },[dispatch])

    const fetchData = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          if (response.ok) {
            const data = await response.json();
            data.map(obj=>{
              obj.image =  `https://picsum.photos/200?random=${obj.id}`
            })            
            console.log(data)
            dispatch({type:'SET_POST', payload:data});
          } 
          
          else {
            throw new Error('Error fetching data');
           }
        } catch (error) {
          console.error(error);
        }
      };
    


  return (
    <div className="App">
      <Routes>
        <Route path='./f4moduletest/' element={<Home/>}></Route>
        <Route path='./detail' element={<Detial/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
