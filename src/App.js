import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyContext from './Mycontext';
import { useState, useEffect } from 'react';
import { Pizza } from './views/Pizza';
import { Cart } from './views/Cart';
import { Home } from './views/Home';


function App() {
  const [pizzas, setPizzas] = useState([]);
  const [cartitems, setCartitems] = useState([]);
  const endpoint = "/pizzas.json";

  const getPizzas= async () => {
    const response = await fetch(endpoint);
    let  data  = await response.json();
    console.log(data);
   
    setPizzas(data);

  };
  const totalCart = (cartitems) => {
    return cartitems.reduce((total, cartItem) => {
         const item = getPizza(cartItem.id)
         return total + item.price * cartItem.quantity 
    }, 0)
  }

  const getPizza = (id) => pizzas.find( product => product.id === id);

  useEffect( ()=>{
    getPizzas();
    console.log(cartitems)
  }, [cartitems]);

  const addToCart = (id) =>{
    setCartitems(currItems => {
     if (currItems.find(item => item.id === id) == null){
         return [...currItems, {id, quantity: 1}];
     } else {
         return currItems.map(item => {
             if (item.id === id){
                 return {...item, quantity: item.quantity + 1};
             } else {
                 return item
             }
         })
     }
 })
   }

  return (
    <div className="App">
      <MyContext.Provider value={{pizzas, setPizzas, cartitems, setCartitems, getPizza, totalCart, addToCart}}>
        <BrowserRouter>
          <Nav/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/pizza/:id" element={<Pizza/>} />
            <Route path="/carrito/" element={<Cart/>} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    
    </div>
  );
}

export default App;
