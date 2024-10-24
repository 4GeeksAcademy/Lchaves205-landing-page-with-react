import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Card1 = () => {
  return (

    <Container>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2021/06/24/16245558914634.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Container>
  );
}

const Cards = () => {

    return (

        <Container>
            <div className="col row-cols-1 row-cols-md-4 d-flex mt-5">
                <Card1/>
                <Card1/>
                <Card1/>
                <Card1/>
            </div>
        </Container>
    );
}

export default Cards;