import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './components/MovieCard';
import Modal from './components/Modal';
import './index.css'; 

const Principal = () => {
    const [movies, setMovies] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://rickandmortyapi.com/api/character');
                const charactersWithImages = response.data.results.map(character => ({
                    ...character,
                    image: character.image 
                }));
                setMovies(charactersWithImages);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchData();
    }, []);

    const openModal = (character) => {
        setSelectedCharacter(character);
    };

    const closeModal = () => {
        setSelectedCharacter(null);
    };

    return (
        <div>
            {movies.map((character) => (
                <MovieCard
                    key={character.id}
                    character={character}
                    onClick={() => openModal(character)}
                />
            ))}
            {selectedCharacter && (
                <Modal onClose={closeModal}>
                    <div>
                        <h2>{selectedCharacter.name}</h2>
                        <p>Location: {selectedCharacter.location.name}</p>
                        <p>First Seen: {selectedCharacter.origin.name}</p>
                        <p>Type: {selectedCharacter.type}</p>
                        <p>Status: {selectedCharacter.status}</p>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default Principal;
