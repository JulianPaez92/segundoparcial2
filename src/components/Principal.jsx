import React from 'react'
import './styles.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { v4 as uuid } from "uuid";

const Principal = ({consultarApi, url, album, setAlbum}) => {

  const agregarImagen = () => { 
    if (album.filter(item => item.image === url.image).length > 0){
        alert("This character exists in your list")
    } else{
        setAlbum([...album, url])
        console.log(album)
    }
     
   }

   const {id,image,name,location,status,fondo} = url


  return (
    <>
        <Container fluid>
        <Row className='principal'>
        <Col className='principal-izq'>
            <h1>Random </h1>
            <br/>
            <h1>characters of </h1>
            <br></br>
            <h1>Rick and Morty</h1>
        </Col>
        <Col className='principal-der textoCard'>
            <Card className='cardP randomMinWidth' style={{ width: '374px' }}>
                <Card.Img className='cardPImg' variant="top" src={image} />
                <Card.Text >Name: {name}</Card.Text>
                <Card.Text >Ubication: {location}</Card.Text>
                <Card.Text style={{backgroundColor: fondo,color:'rgb(255, 255, 255)'}}>State: {status}</Card.Text>
                <Card.Text >Id Number: {id}</Card.Text>
                <Card.Body className='cardBody'>
                    <Button variant="primary" className='boton' onClick={consultarApi}>Another character</Button>
                    <Button variant="primary" className='boton' onClick={agregarImagen}>Add to Favs</Button>
                </Card.Body>
            </Card>
        </Col>
      </Row>
        </Container>
    </>
  )
}

export default Principal