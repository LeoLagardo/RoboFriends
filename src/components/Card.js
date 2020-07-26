import React from 'react';
import '../assets/css/Card.css'

const Card = ({name, email, id}) => {
    return (
        <div className="card">
            <img alt="robot" src={`https://robohash.org/${id}?200x200`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;