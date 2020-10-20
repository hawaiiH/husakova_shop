import React from 'react';
import {Carousel} from 'react-bootstrap';
import kolbasa from './kolbasa.jpg';
import spice from './spice.jpg';
import spice2 from './spices-2.jpg';

const CarouselItems = () => {

    return (
        <Carousel className="main-carousel">
            <Carousel.Item>
                <img
                className="d-block"
                src={kolbasa}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block"
                src={spice}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block"
                src={spice2}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselItems;