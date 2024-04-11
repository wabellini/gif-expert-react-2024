import { useState } from 'react';
//import { AddCategory, GifGrid } from './components/index';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])
    
    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return;
        setCategories([newCategory,...categories])

        //console.log(newCategory);

        //setCategories([ newCategory, ...categories ]); 

        // setCategories(
        //     [ 'Valorant', ...categories ]
        // );    
        // setCategories(cat =inputValue(event.target.value));'Valorant']);
    }

  return (

    <>
   
        <h1>GifExpertApp</h1>
        <AddCategory 
            //setCategories = {setCategories} 

            //onNewCategory={onAddCategory}
            onNewCategory={(value)=>onAddCategory(value)}
            
        />

        {/* <button onClick={ onAddCategory }>Agregar</button>  */}

            {categories.map(category =>  (
                       <GifGrid 
                            key={category} 
                            category={category}
                        />
                    )
                )
            }
            


    </>
  )
}
