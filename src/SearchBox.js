import React from 'react';

const SearchBox =({searchChange})=>{
    return(
        <div className="pa2">
        <input onChange={searchChange} className="pa3 ba b--blue bg-lightest" type='search' placeholder="Search for the profile" />
        
        </div>
    );
}
export default SearchBox;