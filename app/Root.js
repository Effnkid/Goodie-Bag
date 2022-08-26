import React from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { setCandies } from './redux/candyReducer';
import Nav from './components/navigation';
import Candy from './components/candies/Candy';
import Home from './components/Home';
const Root = () => {
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(setCandies());
	}, []);

	return (
		<div className="root">
			<Nav />
			<Routes>
				<Route index element={<Home />} />
				<Route path="/candies" element={<Candy />} />
			</Routes>
		</div>
	);
};

export default Root;
