import React, { FC, useContext } from 'react';
import { useNavigate, } from 'react-router-dom';


interface HomeProps {}

const Home: FC<HomeProps> = () => {
    let navigate = useNavigate();

    return (
      
        <div>
          <div>
            <div>
              <h1>Bjarne Van Looke</h1>
              <h3>Portfolio voor Web Frameworks</h3>
              <p>Hello and welcome to my portfolio page. My name is Bjarne Van Looke and I am a Programming student at AP in Antwerp. 
                 I like to go cycling and game in my free time. On this portfolio you will be albe to view what I have made in my second year durring
                 the cources of Web Frameworks.
              </p>
            </div>
          </div>
          
        </div>
        );
}

export default Home; 