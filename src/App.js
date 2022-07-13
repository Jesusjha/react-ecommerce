import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import RouterPath from './Router';


function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<RouterPath />
			</BrowserRouter>
		</>
	);
}

export default App;
