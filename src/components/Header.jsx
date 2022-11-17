import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css'

const Header = () => {
  return (
    <>
    <Container fluid>
      <Row>
        <Col className='titulo'>
            <h1>Rick y Morty App</h1>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Header