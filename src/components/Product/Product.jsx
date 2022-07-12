import './Product.css';
import { Card, Button, Col, Text } from '@nextui-org/react';
// import { useState } from 'react';

const Product = ({ title, price, image, size }) => {
	/* const [amount, setAmount] = useState(0);

	const increment = () => {
		setAmount(amount + 1);
	};
	const decrement = () => {
		if (amount === 0) return;
		setAmount(amount - 1);
	}; */

	/* 	return (
		<section className='product__grid'>
			<section>
				<div className='product__container'>
					<img className='product__img' src={image} alt={title} />
					<h2 className='product__title'>{title}</h2>
					<p className='product__price'>{price}.00€/u.</p>
					<p className='product__size'>SIZE{size}</p>
					<button className='product__button'>Add Cart</button>
					<p>Amount:{amount}</p>
					<button variant='outlined' onClick={decrement}>
						-
					</button>
					<button variant='outlined' onClick={increment}>
						+
					</button>
				</div>
			</section>
		</section>
	);
}; */
	return (
		<>
			<Card isPressable css={{ cursor: 'default' }}>
				<Card.Body css={{ p: 0 }}>
					<Card.Image
						src={image}
						objetFit='cover'
						width={200}
						height={200}
						alt={title}
					/>
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
							{title}
						</Text>
						<Text
							css={{
								color: '$accents6',
								fontWeight: '$semibold',
								fontSize: '$sm',
							}}
						>
							{price}.00€/u.
						</Text>
					</Col>
					<Col css={{ display: 'flex', justifyContent: 'flex-end' }}>
						<Button size='xs' ghost color='error' auto>
							ADD CART
						</Button>
					</Col>
				</Card.Footer>
			</Card>
		</>
	);
};

export default Product;
