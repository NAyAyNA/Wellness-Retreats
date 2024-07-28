import React from "react"


export default function Card(props) {
    const date = new Date(props.date * 1000); 

    const formattedDate = date.toLocaleString('default', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });    
    return (
        <div className="card">
            <img 
                src={props.image}
                className="card--image" 
            />
            <span className="card-contents">
                <h5 className="card--title">{props.title}</h5>
                <p>{props.description}</p>
                <p>Date: {formattedDate}</p>
                <p>Location: {props.location}</p>
                <p>Price: ${props.price}</p>
            </span>  
        </div>
    )
}