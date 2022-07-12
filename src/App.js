import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Cart from './components/Cart/Cart';
import { Grid } from '@nextui-org/react';

function App() {
	return (
		<>
			<Header />
			<Grid.Container justify='center'>
				<Grid xs={8}>
					<Main />
				</Grid>
				<Grid xs={2}>
					<Cart />
				</Grid>
			</Grid.Container>
		</>
	);
}

export default App;
