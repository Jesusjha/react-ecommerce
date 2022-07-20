import './Cart.css';
import { Container, Spacer, Row, Button, Card, Text } from '@nextui-org/react';
import CartTable from '../CartTable/CartTable';


const Cart = ({ cart, setCart }) => {

	
	console.log(cart);

	const emptyTable = cart.length === 0 && <p>Cart is empty</p>;
	const renderTable = cart.length >= 1 && <CartTable cart={cart}/>;

	return (

		<Container>
			<Spacer y={1} />
			<Card justify='center'>
				<Card.Header css={{ backgroundColor: '$accents9' }}>
					<Row justify='center'>
						<Text css={{ color: '$accents2' }} b>
							Cart Items
						</Text>
					</Row>
				</Card.Header>
				<Card.Body>
				
					{emptyTable}
					{renderTable}
				
				</Card.Body>
				<Card.Footer css={{ backgroundColor: '$accents9' }}>
					<Row justify='flex-end'>
						<Button size='sm' color='error'>
							Check Out
						</Button>
					</Row>
				</Card.Footer>
			</Card>
			</Container>
	);
};

export default Cart;