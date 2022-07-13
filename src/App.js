import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Cart from './components/Cart/Cart';
import { Grid } from '@nextui-org/react';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';


function App() {
	return (
		<>
		<BrowserRouter>
			<Header/>
			<Router/>
			<Grid.Container justify='center'>
				<Grid xs={7}>
					<Main />
				</Grid>
				<Grid xs={2.5}>
					<Cart />
				</Grid>
			</Grid.Container>
			</BrowserRouter>
		</>
	);
}

export default App;
