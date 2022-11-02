import ListGroup from 'react-bootstrap/ListGroup';
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from '../Mycontext';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Cards({product}) {

  const {setCartitems, pizzas, addToCart} = useContext(MyContext) 
  const navigate = useNavigate();

       
  return (

   <div>
 
        <Card style={{ width: '18rem' }} className="mt-3">
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        { product.ingredients.map(ingredient => (
          <ListGroup.Item key={ingredient} className=" d-flex justify-content-left">🍕{ingredient}</ListGroup.Item>
        ))
      }
      </ListGroup>
      <Card.Body>
      <Card.Text className=" d-flex justify-content-center">
          ${product.price}
        </Card.Text>
        <Button variant='info' className="m-3" onClick={() => {navigate(`/pizza/${product.id}`)}}>👀Ver más</Button>
        <Button variant='danger' onClick={() => {addToCart(product.id)}}>🛒Añadir</Button>
      </Card.Body>
    </Card>
  </div> 
  )

}
export default Cards;