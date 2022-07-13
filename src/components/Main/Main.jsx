import products from '../data/products';
import Product from '../Product/Product';
import './Main.css';
import {Grid} from "@nextui-org/react";

function Main() {
	return (
		<main>
		<Grid.Container gap={2} justify="flex-start"> {/* NextUI Grid container */}
			{products.map((rim) => {
				return (
					<Grid key={rim.id} xs={6} sm={3}> {/* NextUI responsive grid */}
					<Product
						title={rim.title}
						price={rim.price}
						image={rim.img}
						size={rim.size}
					/>
					</Grid>
				);
			})}
		</Grid.Container>
		</main>
	);
}

export default Main;
