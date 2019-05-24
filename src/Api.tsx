interface IImage {
  id: string,
  created_at: string,
  width: number,
  height: number,
  color: string,
  urls: IImageURLObj,
}

interface IImageURLObj {
  raw: string,
  full: string,
  regular: string,
  small: string,
  thumb: string
}


const GetData = async(API_URL: string) => {
  return await fetch(API_URL)
    .then(res => res.json())
    .then(json =>{
      return json
    })
    .catch(err => {
      return err;
    });
};

export default GetData;
