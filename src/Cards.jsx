import React from 'react';

const Cards = () => {
	return (
		<div className='grid-custom grid-cols-2 p-[100px] gap-8 justify-items-center'>
			<div className='card w-96 bg-base-100 shadow-xl'>
				<figure>
					<img src='/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg' alt='Shoes' />
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>Shoes!</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div className='card-actions justify-end'>
						<button className='btn btn-primary'>Buy Now</button>
					</div>
				</div>
			</div>
			<div className='card w-96 bg-base-100 shadow-xl'>
				<figure>
					<img src='/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg' alt='Shoes' />
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>Shoes!</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div className='card-actions justify-end'>
						<button className='btn btn-primary'>Buy Now</button>
					</div>
				</div>
			</div>
			<div className='card w-96 bg-base-100 shadow-xl'>
				<figure>
					<img src='/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg' alt='Shoes' />
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>Shoes!</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div className='card-actions justify-end'>
						<button className='btn btn-primary'>Buy Now</button>
					</div>
				</div>
			</div>
			<div className='card w-96 bg-base-100 shadow-xl'>
				<figure>
					<img src='/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg' alt='Shoes' />
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>Shoes!</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
					<div className='card-actions justify-end'>
						<button className='btn btn-primary'>Buy Now</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards;
