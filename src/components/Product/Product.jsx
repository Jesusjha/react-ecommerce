import './Product.css';
import { Card, Col, Text } from '@nextui-org/react';
import BtnAddCart from '../BtnAddCart/BtnAddCart';
import PriceProductCard from '../PriceProductCard/PriceProductCard';

const Product = ({ id, title, price, image, cart, setCart }) => {
	
	const addProduct = () => {

		setCart([...cart, { id, image, title, price }]);
	};
	
	return (
		<>
			<Card isPressable css={{ cursor: 'default' }}>
				<Card.Body css={{ p: 0 }}>
					<Card.Image src={image} width={200} height={200} alt={title} />
				</Card.Body>
				<Card.Footer css={{ backgroundColor: '$accents9' }}>
					<Col
						css={{
							display: 'flex',
							justifyContent: 'flex-start',
							flexDirection: 'column',
						}}
					>
						<Text b css={{ color: '$accents3' }}>
							{' '}
							{title}{' '}
						</Text>
						<PriceProductCard price={price} />
					</Col>
					<Col css={{ display: 'flex', justifyContent: 'flex-end' }}>
						<BtnAddCart addProduct={addProduct} />
					</Col>
				</Card.Footer>
			</Card>
		</>
	);
};

export default Product;
