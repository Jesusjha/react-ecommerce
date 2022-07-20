import products from '../data/products';
import Product from '../Product/Product';
import './Main.css';
import {Grid} from "@nextui-org/react";

const Main = ({ cart, setCart }) => {
	return (
		<main>
		<Grid.Container gap={2} justify="flex-start"> {/* NextUI Grid container */}
			{products.map(({id, title, price, img, size}) => {
				return (
					<Grid key={id} xs={7} sm={4}> {/* NextUI responsive grid */}
					<Product
						id={id}
						title={title}
						price={price}
						image={img}
						size={size}
						cart={cart}
						setCart={setCart}
					/>
					</Grid>
				);
			})}
		</Grid.Container>
		</main>
	);
}

export default Main;