import { useState } from 'react';
import { Button, Text } from '@nextui-org/react';

function CounterBtn() {
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
			<Text color='warning'>Amount:{amount}</Text>
			<Button.Group color='secondary' size='xs'>
				<Button variant='outlined' onClick={decrement}>
					-
				</Button>
				<Button variant='outlined' onClick={increment}>
					+
				</Button>
			</Button.Group>
		</>
	);
}

export default CounterBtn;
