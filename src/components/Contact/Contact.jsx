import { Card, Container, Text, Input, Textarea, Button } from '@nextui-org/react';
import React from 'react';

function Contact() {
	return (
		<>
			<Container>
				<Card css={{ bc: '$accents9', w: '80rem', margin: '2rem auto' }}>
					<Card.Body css={{ margin: 'auto' }}>
						<Text color='#fff' h2>
							Contact Us
						</Text>
					</Card.Body>
				</Card>
			</Container>
			<Container
				css={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					w: '30rem',
				}}
			>
				<Input bordered label='Your Name' type='text'></Input>
				<Input bordered css={{ mt: '1.5rem' }} label='Your Email' type='text'></Input>
				<Input bordered css={{ mt: '1.5rem' }} label='Your Phone' type='text'></Input>
				<Textarea
          bordered
          rows={8}
          css={{ mt: '1.5rem', }}
					label='Your Message'
				/>
        <Button color='error' css={{mt:'2rem'}}>Send Message</Button>

			</Container>
		</>
	);
}

export default Contact;
