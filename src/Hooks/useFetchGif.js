import { useEffect, useState } from "react"

import { getGift } from '../Helpers/getGift';





export const useFetchGif = categoria => {
    const [state, setstate] = useState({
        data: [], loading: true
    })

    useEffect(()=>{

        getGift(categoria)
        .then(img =>{

            setTimeout(() => {
            
                
               setstate({
                    data: img,
                    loading: false
                })

            }, 3000);
        })

    },[categoria])

    

return state;
}

