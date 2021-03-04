import React from 'react';
import { Alert } from 'reactstrap';

import '../sass/intro.scss';

const Intro = () => {
    return (
        <div className='intro-container'>
            <Alert className= 'intro'>
            <p>
               Lorem ipsum dolor sit amet consectetur adipiscing elit,
               urna consequat felis vehicula class ultricies mollis dictumst,
               aenean non a in donec nulla. Phasellus ante pellentesque erat
               cum risus consequat imperdiet aliquam, integer placerat et 
               turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula
               porttitor metus
            </p>
            </Alert>
        </div>
    );
};

export default Intro;
