import React, {useState, useEffect, FunctionComponent} from 'react';
import logo from './logo.svg';
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import './App.css';
import GetData from './Api';
const API_URL = `https://api.unsplash.com/photos/?client_id=0a52c7eede6320232b60ced9e2a2147a79dda95dfd63d2454fc7b71a9c09a634`;

type ImgValue = {
  urls: {raw: string, thumb: string},
  alt_description: string,
  id: string,

}

const App: React.FunctionComponent = () => {
  // console.log(GetData(API_URL));
  const [imageData, setImageData] = useState([]);
  useEffect(() => {
    let data = GetData(API_URL);
    data.then((images:any) => {
      setImageData(images);
    });
    return () => {
      // do cleanup here
    };
    }, []);
    return (
    <div className="App">
      <h1> Image loading component trial </h1>
      <div className="image-container">
        {imageData && imageData.map((value: ImgValue, key) => {
          return <img src={value.urls.thumb} alt={value.alt_description} key={String(key)} id={value.id} />
        })}
      </div>
      <FaBackward />
      <FaForward />
    </div>
  );
}

export default App;
