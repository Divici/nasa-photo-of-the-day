import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Photo from './Photo';
import Info from './Info';
import Explanation from "./Explanation";

function App() {
  const [nasaData, setNasaData] = useState([]);


  useEffect(()=>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(resp => {
      setNasaData(resp.data);
    })
    .catch(error =>{
      console.error(error);
    })    
    
  }, []);



  return (
    <div className="App">
      <h1>
        NASA Photo of the Day <span role="img" aria-label='go!'>🚀</span>!
      </h1>

      < Photo 
        imageURL={nasaData['hdurl']}
        title={nasaData['title']}
      />
      < Info 
        date={nasaData['date']}
        copyright={nasaData['copyright']}
      />
      < Explanation explanation={nasaData.explanation}/>
    </div>
  );
}

export default App;
