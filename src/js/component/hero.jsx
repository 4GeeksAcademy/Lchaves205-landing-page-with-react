import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

 const Hero = () => {
    return (
        <Container>
        <div >
            <h1>A Warm Welcome!!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsa maxime vitae? Non nostrum et rerum, in animi minima debitis perferendis dignissimos a possimus quia natus tempora delectus sed est?</p>
            <Button variant="primary">Call to Action!!</Button>{' '}
        </div>
        </Container>

    );
 }

 export default Hero;