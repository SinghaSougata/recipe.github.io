
import { useState } from 'react';
import React from 'react';
import axios from 'axios';
import './App.css';
import Recipie from './Recipie';

function App() {
  
  const[query,setQuery]=useState('');
  const[recipies,setRecipies]=useState([]);
  
   
  const YOUR_APP_ID='30f7ca08';
  const YOUR_APP_KEY='ed521843ab5387ec038bae05ea635987'

  var url=`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&calories=591-722&health=alcohol-free`


   async function getRecipie(){
    var result= await axios.get(url);
    setRecipies(result.data.hits);
    console.log(result.data)
  }

  const submit=(e)=>{
    e.preventDefault();
    getRecipie();
  }  

  return (
    <div className="app">
       <h1> Food Recipie Plazza <img src='https://c.tenor.com/Q6nVHwGq1NkAAAAj/food-drink-burger.gif' alt=""/> </h1>
        
        <form className='app_searchForm' onSubmit={submit}>
          <input className="enter" type='text' placeholder="Enter ingredient" value={query} onChange={(e)=>setQuery(e.target.value)}></input>
          <input  className="search" type="submit" value="search"/>
        </form>
        <div className='final'>
          
            {recipies.map((recipie)=>{
                 return <Recipie recipie={recipie}/>
            })
            }
          
        </div>

    </div>
  );
}

export default App;
