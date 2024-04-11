//import { useEffect, useState } from 'react';
//import {getGifs} from '../helpers/getGifs';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

const { images, isLoading } = useFetchGifs( category );

console.log({images, isLoading});

//   const [images, setImages] = useState([]);
// const getImages = async () => {
//   const newImages = await getGifs(category);
//   setImages(newImages);
// }
//   useEffect(() => {
//     getImages();
//   }, []);




  // useEffect(() => {
  //   getGifs(category)
  //     .then((newImages) =>setImages(newImages));
  // }, []);

  return (
    <>
        <h3>{ category}</h3>
        {
          /*
          isLoading
          ?(<h2 >Cargando...</h2>)
          :null
          */
          isLoading && (<h2>Cargando...</h2>)
        }
        

        <div className="card-grid">
          {
            images.map((image) => (

              <GifItem 
                key={image.id}
                {...image}
              />
            ))
          }
        </div>
    </>
  )
}
