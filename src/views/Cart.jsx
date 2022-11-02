import React from 'react'
import { useContext, useState } from "react";
import MyContext from '../Mycontext';
import Stack from 'react-bootstrap/Stack';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export const Cart = () => {

  const { cartitems, getPizza, totalCart } = useContext(MyContext)


  return (
    <Container>
      {cartitems.map((cartitem => {
        const item = getPizza(cartitem.id)
        return (
          
          <Stack direction="horizontal" gap={3} className="mt-4" key={cartitem.id}>
          <div className="bg-light border"><img src={item.img} height="60" /></div>
          <div className="bg-light border"><p>{item.name}</p></div>
          <div className="bg-light border ms-auto fw-bold">Cantidad: {cartitem.quantity}</div>
          <div className="bg-light border fw-bold">Subtotal: ${item.price * cartitem.quantity}</div>
        </Stack>
        
        
        )
      }))}
      <p className='total'>Total: ${totalCart(cartitems)}</p>
      <Button variant='success' className=" d-flex justify-content-left">Ir a pagar</Button>
      

      </Container>
  )
}
