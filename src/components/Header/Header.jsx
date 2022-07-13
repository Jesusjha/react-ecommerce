import './Header.css';
import { Container, Card, Row, Col} from '@nextui-org/react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header>
			<Container>
				<Card>
					<Card.Body>
						<Row>
							<Col>
								<Link to='/'>
                LOGOTYPE
								</Link>
							</Col>
							<Col>
								<Link to='/'>
									Home
								</Link>
							</Col>
							<Col>
								<Link to='/Categories'>
									Categories
								</Link>
							</Col>
							<Col>
								<Link to='/Contact'>
									Contact Us
								</Link>
							</Col>
							<Col>
								<Link to='Login'>
									Login
								</Link>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Container>
		</header>
	);
}

export default Header;
