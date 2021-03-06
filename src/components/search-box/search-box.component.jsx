import React, {Component} from 'react';
import './search-box.css'

const SearchBox = ({placeholder, handleChange}) => {
    return(
        <div >
            <input 
            className='search' 
            type='search' 
            placeholder={placeholder} 
            onChange= {handleChange}
            >
            </input>
        </div>
    );
}

export default SearchBox;