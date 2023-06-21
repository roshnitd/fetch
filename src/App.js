
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts]=useState([])


  useEffect(() =>{
  fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => setPosts(posts))
  },[])


  return  <div className="App">
    <h1>Fetch API Data</h1>
    {posts.map((item)=>{
return <h1 key={item.id}>{item.title}</h1>
    })}
    </div>;
  
}

export default App;
