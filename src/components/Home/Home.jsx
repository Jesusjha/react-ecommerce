import React, { useState, useEffect } from 'react'
import { Grid } from '@nextui-org/react';
import Main from '../Main/Main';
import Cart from '../Cart/Cart';
import Login from '../Login/Login';

const storageProduct = JSON.parse(localStorage.getItem('product')) || [];

function Home() {

	const [cart, setCart] = useState(storageProduct);

	useEffect(() => {
		console.log('Guardando producto en carrito')
		localStorage.setItem('product', JSON.stringify(cart))
	}, [cart])
	
	return (
    <>
      <Grid.Container justify='center'>
				<Grid xs={7}>
					<Main cart={cart} setCart={setCart} />
				</Grid>
				<Grid css={{ display:'flex', flexDirection:'column', alignItems:'center' }} xs={3}>
					<Login />
					<Cart cart={cart} setCart={setCart} />
				</Grid>
			</Grid.Container>
    </>
  )
}

export default Home