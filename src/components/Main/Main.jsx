import products from '../data/products';
import Product from '../Product/Product';
import './Main.css';

function Main() {
	return (
		<main>
			{products.map((rim) => {
				return (

					<Product
						key={rim.id}
						title={rim.title}
						price={rim.price}
						image={rim.img}
						size={rim.size}

					/>
				);
			})}
		</main>
	);
}

export default Main;
