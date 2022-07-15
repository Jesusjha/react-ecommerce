import { Text } from '@nextui-org/react';

const PriceProductCard = ({ price }) => {
	return (
		<Text
			css={{
				color: '$accents6',
				fontWeight: '$semibold',
				fontSize: '$sm',
			}}
		>
			{price}.00€/u.
		</Text>
	);
};

export default PriceProductCard;
