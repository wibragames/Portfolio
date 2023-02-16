import { ImageListItem } from '@mui/material';
import React from 'react';

function About() {
    return (
        <div>
            <h1>About</h1>
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
            </div >
            <p>On this page you will find info about the company I have my internship at Inuits.</p>
            <p>Inuits is an open source minded company that started in Belgium in 2007. The offices Inuits has are called igloos, as the typical inuit buildings are called.</p>
            <p>Meanwhile Inuits has grown to a company with Igloos all over Europe.</p>
            <p></p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ul>
                    <h3>Here is a list of the Igloos: </h3>
                    <li> Antwerpen:
                        <ul>Head Igloo: Essensesteenweg 31, 2930 Brasschaat</ul>
                        <ul>The Beacon: Sint-Pietersvliet 7, 2000 Antwerpen</ul>
                    </li>
                    <li>Ghent:
                        <ul>De Krook: Miriam Makebaplein 1, 9000 Ghent</ul>
                    </li>
                    <li>Hasselt:
                        <ul>Kempische Steenweg 31, 3500 Hasselt</ul>
                    </li>
                    <li>Czech Republic:
                        <ul>Impact Hub: Drinova 557/10, 150 00 Prague</ul>
                        <ul>Inuits s.r.o: Pekařská 962/72, 601 00 Brno</ul>
                    </li>
                    <li>Poland:
                        <ul>Inuits Sp. z O.O.: Krupnicza 5/1, 31-123 Kraków</ul>
                    </li>
                    <li>Ukraine
                        <ul>Inuits Ukraine: Pecherskiy uzviv 88 app.7, 01133 Kyiv </ul>
                    </li>
                </ul>
            </div>
            <p className='paragraph'>
                I am working mostly in th Igloo in Brasschaat, but I will go to the other Igloos in Belgium at least once durring my internship. I will be working with a 
                team on a DAMS project. This stands for Digital Assecment Management System. The main one I will be working at will contain the works form musea in Ghent 
                and Antwerp as assets.
            </p>
        </div>
    );
}

export default About;