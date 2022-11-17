import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ListGroup } from 'react-bootstrap';


const CardFavoritos = ({url, borrarImg}) => {
  return (
    <>
      <Card className='cardP cardWidth textoCard' style={{ width: '' }}>
      <Card.Img className='cardAImg' variant="top" src={url.image} />
      <Card.Title style={{backgroundColor: url.fondo,color:'rgb(255, 255, 255)'}}>{url.status}</Card.Title>
      <Card.Body className='cardBody'>
        <Card.Title style={{  textDecoration: 'underline'}}> {url.name}</Card.Title>
        
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{url.location}</ListGroup.Item>
        <ListGroup.Item>{url.id}</ListGroup.Item>
      </ListGroup>
      <Card.Body className='cardBody'>
        <Button 
          variant="primary" 
          className='boton' 
          onClick={()=>borrarImg(url.id)}>Delete from Favs
        </Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default CardFavoritos