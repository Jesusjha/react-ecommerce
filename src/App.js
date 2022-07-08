import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <>
      <Header/>
      <div>
        <Main/>    
        <Cart/>
      </div>
    </>
  );
}

export default App;
