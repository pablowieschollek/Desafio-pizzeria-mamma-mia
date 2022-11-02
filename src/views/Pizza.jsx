import React from 'react'
import { useContext } from 'react'
import MyContext from '../Mycontext';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const Pizza = () => {
  const { pizzas, getPizza, addToCart } = useContext(MyContext)
  const { id } = useParams();
  const pizza = getPizza(id)
  console.log(pizza);

  return (
    <div className='maincontainer'>
      <Container className='mt-4'>
        <Row>
          <Col >
            <img src={pizza.img} />
          </Col>
          <Col>
            <h2>{pizza.name}</h2>
            <p> {pizza.desc}</p>
            <ul>
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index.toString()}>🍕{ingredient}</li>
              ))}
            </ul>
            <h2>Precio: ${pizza.price}</h2> <Button variant='danger' onClick={() => {addToCart(pizza.id)}}>🛒Añadir</Button>
            </Col>
        </Row>
      </Container>
    </div>
  )
}
