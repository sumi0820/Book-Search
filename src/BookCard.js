import React from 'react';

const BookCard = (props) => {
    return(
        <div className="card-container">
            <img src={props.image} alt=""/>
            <div className="desc">
                <h2>{props.title} {props.subtitle}</h2>
                <h3>Author: {props.author}</h3>
                <h4>Published Date: {props.published === '0000' ? "Not available" : props.published.substring(0, 10)}</h4>
                <p>{props.description}</p>
                <div className="view">
                    <a href={props.previewLink} target="_blank" className="btn btn-primary badge-dark">View more</a>
                </div>
            </div>
        </div>
    )
}

export default BookCard;
