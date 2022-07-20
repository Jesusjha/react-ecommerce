import React, { useState } from 'react'
import { Grid } from '@nextui-org/react';
import Main from '../Main/Main';
import Cart from '../Cart/Cart';
import Login from '../Login/Login';


function Home() {

	const [cart, setCart] = useState([]);

  
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