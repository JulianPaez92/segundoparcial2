import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css'

const Footer = () => {
  return (
    <>
        <Container fluid></Container>
            <Row>
                <Col className='footer'>
                    <h3>SEGUNDO PARCIAL - 2022</h3>
                </Col>
            </Row>
    </>
  )
}

export default Footer