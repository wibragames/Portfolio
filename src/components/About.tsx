import { ImageListItem } from '@mui/material';
import React from 'react';

function About() {
    return (
        <div>
            <h1>About Inuits</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ImageListItem
                    sx={{
                        bgcolor: 'background.paper',
                        width: 500,
                    }}
                >
                    <img
                        src={'./logo_inuits.svg'}
                        alt={'My Picture'}
                        loading='lazy'
                    />
                </ImageListItem>
            </div>
            <p>On this page you will find info about the company I have my internship at, Inuits.</p>
        </div>
    );
}

export default About;