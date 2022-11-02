import React from 'react'

import { useContext, useState } from "react";
import MyContext from '../Mycontext';
import MyCard from '../Components/Card';
import { Container, Row } from 'react-bootstrap';

export const Home = () => {

  const {pizzas, setPizzas} = useContext(MyContext);

  return (
    <>
    <div className='pizzacontainer'>
    <h2>¡Pizzería Mamma Mia!</h2>
    <h5>Tenemos las mejores pizzas que podrás encontrar</h5>
  </div>
    <Container>
      <Row md={3} lg={3} xl={3}>
        {pizzas.map((product) => ( <MyCard key={product.id} product={product}/> ))}
      </Row>
    </Container>
    </>
  )
}
