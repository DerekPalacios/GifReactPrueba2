

import React,{useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategoria}) => {

const [inputValue, setInputValue] = useState("")

const SetNewValue=(e) =>{
    setInputValue(e.target.value);
}
    
const capSummit= (e)=>{
    e.preventDefault();
    
    setCategoria(inputValue);
    setInputValue("");
}
    return (
        <form onSubmit={capSummit}>
            <h2> Buscar Gif por Categorias</h2>

            <input
            type='text'
            value={inputValue}
            onChange={SetNewValue}
            placeholder="Ingrese Categoria ..."

            />
        </form>
    )
}


AddCategory.propTypes={
    setCategoria: PropTypes.func.isRequired,
}