import React from 'react';
import Image from './Images';

interface ImageListProps {
  images: Array<object>
};

const ImagesList: React.FC<ImageListProps> = (props) => {
  let images = props.images;
  console.log(images);
  return (
    <div>
      {images  && images.forEach((key, image) => {
        <Image urls={image.urls} key={key.toString()} />
      })}
      <h1> I am the image list</h1>
    </div>
  );
};


export default ImagesList;
