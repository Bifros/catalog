import React from 'react';

const AlphabetRubric = ({ handleAlphabetClick, letter, index }) => {
    return (
        <a key={index} className="" onClick={handleAlphabetClick}>
            {' ' + letter.toUpperCase() + ' '}
        </a>
    );
};

export default AlphabetRubric;
