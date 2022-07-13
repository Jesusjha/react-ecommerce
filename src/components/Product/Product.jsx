import './Product.css';
import { Card, Button, Col, Text } from '@nextui-org/react';
import { useState } from 'react';

const Product = ({ title, price, image, size }) => {
	
const [amount, setAmount] = useState(0);

	const increment = () => {
		setAmount(amount + 1);
	};
	const decrement = () => {
		if (amount === 0) return;
		setAmount(amount - 1);
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
							{' '}
							ADD CART{' '}
						</Button>
					</Col>
					<Col>
						<Text color="warning">
						Amount:{ amount}
						</Text>
						<Button.Group color='secondary' size='xs'>
							<Button variant='outlined' onClick={decrement}>-</Button>
							<Button variant='outlined' onClick={increment}>+</Button>
						</Button.Group>
					</Col>
				</Card.Footer>
			</Card>
		</>
	);
};

export default Product;
