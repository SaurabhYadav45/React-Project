import React, {useState} from 'react';



const Cards = ({ id, image, info, price, name, removeTour }) =>{

    const[readMore,setReadMore] = useState(false);
    const description = readMore ? info : `${info.substring(0,200)}....`;

    function readMoreHandler (){
        setReadMore(!readMore);
    }

    return(
        <div className="card">
            <img src={image} className="image"></img>
            <div className="tour-info">
                 <div className="tour-detail">
                    <h3 className="tour-price">{price}</h3>
                    <h3 className="tour-name">{name}</h3>
                 </div>
                 <div className="tour-description">
                    {description}
                    <span className='read-more' onClick={readMoreHandler}>
                        {readMore ? `show less` : `read more`}
                    </span>
                 </div>
            </div>
            <button className='not-interested-button' onClick={() =>removeTour(id)}>Not Interested</button>
        </div>
    );
}

export default Cards;