import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
const Footer = () => {
    return (
        <Navbar className="p-3 mt-4" expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <span className="copyright" > copyright ℗Anibal_Velasco 2024 :D </span> 
            </Container>
        </Navbar> 
    );
}




export default Footer