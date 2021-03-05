import React from 'react';

import { Alert, UncontrolledCarousel } from 'reactstrap';

import '../sass/apps.scss';

import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const items = [
    {
      src: image1,
      altText: 'Slide 1',
      caption: 'Slide 1',
      header: 'Slide 1 Header',
      key: '1'
    },
    {
      src: image2,
      altText: 'Slide 2',
      caption: 'Slide 2',
      header: 'Slide 2 Header',
      key: '2'
    },
    {
      src: image3,
      altText: 'Slide 3',
      caption: 'Slide 3',
      header: 'Slide 3 Header',
      key: '3'
    }
  ];

const Apps = () => {
    return (
        <div className='apps-container'>

            <Alert className= 'apps-intro'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit,
                    urna consequat felis vehicula class ultricies mollis dictumst,
                </p>
            </Alert>


            <UncontrolledCarousel items={items} />
        </div>
    );
};

export default Apps;