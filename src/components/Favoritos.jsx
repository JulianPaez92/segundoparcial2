import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css'
import CardFavoritos from './CardFavoritos';

const Favoritos = ({album, borrarImg}) => {
  return (
    <>
        <Container fluid className='album'>
            <Row>
                <Col className='titulo-album'>
                    <h1>Your favorites</h1>
                </Col>
            </Row>
            <Row>
                <Col className='albumImg'>
                    {album.map(url => (
                        <CardFavoritos
                            url = {url}
                            borrarImg = {borrarImg}
                        />
                    ))}
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Favoritos