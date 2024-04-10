import React from 'react';

const MovieCard = ({ character, onClick }) => {
    return (
        <div className="movie-card" onClick={onClick}>
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <p>Location: {character.location.name}</p>
            <p>First Seen: {character.origin.name}</p>
            <p>Type: {character.type}</p>
            <p>Status: {character.status}</p>
        </div>
    );
};

export default MovieCard;
