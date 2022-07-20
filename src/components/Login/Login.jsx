import { Container, Card, Row, Text, Button, Spacer } from '@nextui-org/react';
import LoginForm from '../LoginForm/LoginForm';

function Login() {
	return (
		<>
			<Container>
        <Spacer y={0.55} />
        <Card>
          <Card.Header css={{backgroundColor:'$accents9'}}>
            <Row justify='center'>
								<Text css={{color:'$accents2'}} b>Start Session</Text>
            </Row>
          </Card.Header>
          <Card.Body>
            <LoginForm />
          </Card.Body>
          <Card.Footer css={{backgroundColor:'$accents9'}}>
            <Row justify='space-around'>
              <Button bordered size='sm' color='warning'>Sign In</Button>
              <Button size='sm' color='error'>Log In</Button>
            </Row>
          </Card.Footer>
        </Card>
      </Container>
		</>
	);
}

export default Login;
