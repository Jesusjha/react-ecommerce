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
								<Link to='/'>LOGOTYPE</Link>
							</Col>
							<Col>
								<Link to='/'>Home</Link>
							</Col>
							<Col>
								<Link to='/categories'>Categories</Link>
							</Col>
							<Col>
								<Link to='help'>Help</Link>
							</Col>
							<Col>
								<Link to='/contact'>Contact Us</Link>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Container>
		</header>
	);
}

export default Header;