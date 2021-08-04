import React from 'react';
import { useFetchGif } from '../Hooks/useFetchGif';

import { GiftGridItem } from './GiftGridItem';

export default function GiftGrid({categoria}) {
    
  
    
    const {data: images,loading} = useFetchGif(categoria);
   

    return (
        <>
        <h4 className="animate__animated animate__fadeIn">{categoria} </h4>
       {loading && <p className="animate__animated animate__flash animate__repeat-3">Loading...</p>}
        <div className="card-grid">
     
        {
            
            images.map(img=>(
                <GiftGridItem   
                    key={img.id}   
                    { ...img}
                />
                
            )
        )}
       
        </div>
        <hr></hr>
        </>
    )
}
