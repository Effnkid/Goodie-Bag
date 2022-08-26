import React from 'react';
import { useSelector } from 'react-redux';
export default function Candy() {
	const state = useSelector((state) => state);

	return state.map((candy) => (
		<div key={candy.id} id="candy-container">
			<img src={candy.imageUrl} />
			<h1>{candy.name}</h1>
			<p>{candy.description}</p>
			<p>QTY: {candy.quantity}</p>
		</div>
	));
}
