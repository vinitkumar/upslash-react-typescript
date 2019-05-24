import React, {useState, useEffect, FunctionComponent} from 'react';
import logo from './logo.svg';
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import './App.css';
import ImagesList from './ImagesList';
import GetData from './Api';
const API_URL = `https://api.unsplash.com/photos/?client_id=0a52c7eede6320232b60ced9e2a2147a79dda95dfd63d2454fc7b71a9c09a634`;

const App: React.FunctionComponent = () => {
  // console.log(GetData(API_URL));
  const [imageData, setImageData] = useState([]);
  useEffect(() => {
    let data = GetData(API_URL);
    data.then((images:any) => {
      console.log("DO I have any data here", images);
      setImageData(images);
    });
    return () => {
      // do cleanup here
    };
    }, []);
    return (
    <div className="App">
      <FaPlay />
      <FaPause />
      <FaForward />
      <FaBackward />
      <h1> Image loading component trial </h1>
      <div className="image-container">
        <ImagesList images={imageData} />
      </div>
    </div>
  );
}

export default App;
