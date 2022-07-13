import './Cart.css';
import { Container, Spacer, Row, Button, Card, Text } from '@nextui-org/react';
import CartItem from '../CartItem/CartItem';

function Cart() {
	return (
			<Container fluid>
        <Spacer y={0.7}/>
				<Card css={{ $$cardColor: '$color$primary' }}>
					<Card>
						<Card.Header css={{backgroundColor:'$accents9'}}>
							<Text css={{color:'$accents2'}} b>Cart Items</Text>
						</Card.Header>
						<Card.Divider />
						<Card.Body>
							<CartItem />
						</Card.Body>
						<Card.Divider />
						<Card.Footer css={{backgroundColor:'$accents9'}}>
							<Row justify='flex-end'>
								<Button auto color='error' size='sm'>Continue</Button>
							</Row>
						</Card.Footer>
					</Card>
				</Card>
			</Container>
	);
}

export default Cart;
