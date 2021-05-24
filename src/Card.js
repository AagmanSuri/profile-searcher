import React from 'react';


const Card=({name,id,email,standard,Language,CodingLvl})=>{ 
    return(
        
        <div className="tc bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5">
        <img alt='Student' src={`https://robohash.org/set_set5/bgset_bg1/3.14159/${id}?size=200x200`}/>
        <h2>{name}</h2>
        <p>Standard:{standard}</p>
        <p>Language: {Language}</p>
        <p>Coding Level:{CodingLvl}</p>
        <p>{email}</p>
        </div>
        
    );
}

export default Card;