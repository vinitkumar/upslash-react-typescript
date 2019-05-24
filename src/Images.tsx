import React from 'react';

interface IImageURLObj {
  raw: string,
  full: string,
  regular: string,
  small: string,
  thumb: string
}


interface IImage {
  id: string,
  created_at: string,
  width: number,
  height: number,
  color: string,
  urls: IImageURLObj,
}


const Image: React.FC<IImage> = (props) => {
  return (
    <img src={props.image.urls.raw}/>
  );

};

export default Image;
