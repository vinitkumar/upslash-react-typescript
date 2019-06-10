import React, {useState, useEffect, FunctionComponent} from 'react';
import logo from './logo.svg';
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import './App.css';
import GetData from './Api';

function getAPIURL(midparams: string, endparams: string = '') : string {
  return `https://api.unsplash.com/${midparams}/?client_id=0a52c7eede6320232b60ced9e2a2147a79dda95dfd63d2454fc7b71a9c09a634&${endparams}`;
}


type ImgValue = {
  urls: {raw: string, thumb: string},
  alt_description: string,
  id: string,

}

const getDimension = () => {
  return {width: window.innerWidth, height: window.innerHeight};
}


const App: React.FunctionComponent = () => {
  // console.log(GetData(API_URL));
  function getImage(event: React.MouseEvent) {
    if (event.target) {
      let photoElement = event.target as HTMLElement;
      let photoId = photoElement.id
      let param = `photos/${photoId}`;
      let photoAPIURL = getAPIURL(param);
      let data = GetData(photoAPIURL);
      data.then((image:any) => {
        console.log(image);
      });
      console.log(photoId);
    }
  }

  const [imageData, setImageData] = useState([]);
  useEffect(() => {
    let pageSize = 30
    let endparams = `per_page=${pageSize}`;
    let photosAPIURL = getAPIURL('photos', endparams);
    let data = GetData(photosAPIURL);
    data.then((images:any) => {
      console.log(images.length);
      setImageData(images);
    });
  }, []);
  return (
    <div className="App">
      <h1> Image loading component trial </h1>
      <div className="image-container row">
        {imageData && imageData.map((value: ImgValue, key) => {
          return <img onClick={getImage} src={value.urls.thumb} alt={value.alt_description} key={String(key)} id={value.id} />
        })}
      </div>
      <FaBackward />
      <FaForward />
    </div>
  );
}

export default App;
