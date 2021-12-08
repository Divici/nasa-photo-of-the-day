import React from 'react';

const Photo = props =>{

    const {imageURL, title, date, copyright} = props;

    return (
        <div>
            <h2>{title}</h2>
            <img src={imageURL} alt='nasa'></img>
            <h3>{date}</h3>
            <p>Copyright: {copyright}</p>
        </div>
    )
}


export default Photo;