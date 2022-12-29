import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './DogImage.module.css'

const DogImage = () => {
    const [imageUrl, setImageUrl] = useState('');

    const getRandomDog = () => {
        axios
            .get('https://dog.ceo/api/breeds/image/random')
            .then(response => {
                setImageUrl(response.data.message);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className={styles.container}>
            <h1>Picture of a random dog</h1>
            <div className={styles.flexContainer}>
                {imageUrl && <img src={imageUrl} alt="A random dog" className={styles.containerImage} />}
                <button onClick={getRandomDog} className="button">Get a new dog</button>
            </div>
        </div>
    );
};

export default DogImage;