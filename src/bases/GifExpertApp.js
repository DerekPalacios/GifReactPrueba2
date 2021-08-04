import React, {useState} from 'react';
import { AddCategory } from './AddCategory';
import GiftGrid from './GiftGrid';






const DefaultApp= () => {
    const [categoria, setCategoria] = useState([]);

    const AddCategoria =(newCat)=>{
      
        setCategoria([newCat,...categoria ]);
        
    }


    return <>

    <h2>Gif Expert App</h2>
    <AddCategory setCategoria = {AddCategoria}/>
    <hr></hr>

    <ol>
        {
            categoria.map(cat =>
                (
                    <GiftGrid 
                        key={cat}
                        categoria={cat} />
                
            ))

        }
        
    </ol>
    
    
    </>
}

export default  DefaultApp;