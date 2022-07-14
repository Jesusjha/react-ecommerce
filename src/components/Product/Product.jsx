import './Product.css';
import { Card, /* Button */ Col, Text } from '@nextui-org/react';
import BtnAddCart from '../BtnAddCart/BtnAddCart';
import CounterBtn from '../CounterBtn/CounterBtn';

const Product = ({ title, price, image, size }) => {
	

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
						<BtnAddCart/>
					</Col>
					<Col>
							<CounterBtn/>
					</Col>
				</Card.Footer>
			</Card>
		</>
	);
};

export default Product;
