import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Context
import { ProductContext } from "./contexts/ProductContext"
import { CartContext } from "./contexts/CartContext"

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart(cart => [...cart, item])
	};

	const removeItem = item => {
		setCart(cart.filter(value => Number(value.id) !== Number(item.target.value)))
	}

	console.log("shows removeItem: ", removeItem)
	console.log("shows cart: ", cart)

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }}>
				<CartContext.Provider value={{ cart, removeItem }}>
					<Navigation cart={cart} />
					<Route exact path="/" component={Products} />
					<Route path="/cart" component={ShoppingCart} />
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
