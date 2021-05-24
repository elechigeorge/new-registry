import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import One from '../images/burser.jpg'
import Two from '../images/rector.jpg'
import Three from '../images/reg-building.jpg'

function HomeScreen() {


    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="mb-5">
            <Carousel activeIndex={index} onSelect={handleSelect} fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={One}
                        alt="First slide"
                        style={{ height: '85vh' }}
                    />
                    <Carousel.Caption>
                        <h3>Office of the burser</h3>
                        <p>The bursery office building</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Two}
                        alt="Second slide"
                        style={{ height: '85vh' }}
                    />

                    <Carousel.Caption>
                        <h3>The Office of the Rector</h3>
                        <p>The rectory office building</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Three}
                        alt="Third slide"
                        style={{ height: '85vh' }}
                    />

                    <Carousel.Caption>
                        <h3>The Office of the Registrar</h3>
                        <p>
                            The Registrar office building
          </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </div>
    );
}



export default HomeScreen
