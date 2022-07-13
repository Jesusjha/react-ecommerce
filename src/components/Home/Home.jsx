import React from 'react'
import { Grid } from '@nextui-org/react';
import Main from '../Main/Main';
import Cart from '../Cart/Cart';


function Home() {
  return (
    <>
      <Grid.Container justify='center'>
				<Grid xs={7}>
					<Main />
				</Grid>
				<Grid xs={2.5}>
					<Cart />
				</Grid>
			</Grid.Container>
    </>
  )
}

export default Home