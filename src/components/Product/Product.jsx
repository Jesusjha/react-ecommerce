import './Product.css';
import { useState } from 'react';
import { Button } from '@mui/material';

const Product = ({ title, price, image, size }) => {
	const [amount, setAmount] = useState(0);

	const increment = () => {
		setAmount(amount + 1);
	};
	const decrement = () => {
		if (amount === 0) return;
		setAmount(amount - 1);
	};

	return (
		<section className='product__grid'>
			<section>
				<div className='product__container'>
					<img className='product__img' src={image} alt={title} />
					<h2 className='product__title'>{title}</h2>
					<p className='product__price'>{price}.00€/u.</p>
					<p className='product__size'>SIZE{size}</p>
					<button className='product__button'>Add Cart</button>
					<p>Amount:{amount}</p>
					<Button variant='outlined' onClick={decrement}>
						-
					</Button>
					<Button variant='outlined' onClick={increment}>
						+
					</Button>
				</div>
			</section>
		</section>
	);
};

export default Product;
