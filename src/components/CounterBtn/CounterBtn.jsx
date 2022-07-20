import { useState } from 'react';
import { Button, Text } from '@nextui-org/react';

function CounterBtn() {
	const [amount, setAmount] = useState(1);

	const increment = () => {
		setAmount(amount + 1);
	};
	const decrement = () => {
		if (amount === 0) return;
		setAmount(amount - 1);
	};

	return (
		<>
			<Button.Group color='error' size='xs'>
				<Button variant='outlined' onClick={decrement}>
					-
				</Button>
				<Button variant='outlined' onClick={increment}>
					+
				</Button>
				<Button bordered>
				{amount}
				</Button>
			{/* <Text color='warning'>{amount}</Text> */}
			</Button.Group>
		</>
	);
}

export default CounterBtn;
