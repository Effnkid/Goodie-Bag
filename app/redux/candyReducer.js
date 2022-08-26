import axios from 'axios';

const SET_CANDIES = 'SET_CANDIES';

export const _setCandies = (candies) => {
	return {
		type: SET_CANDIES,
		candies,
	};
};

export const setCandies = () => {
	return async (dispatch) => {
		const { data: candies } = await axios.get('/api/candies');
		dispatch(_setCandies(candies));
	};
};

export default (state = [], { type, candies }) => {
	switch (type) {
		case SET_CANDIES:
			return candies;

		default:
			return state;
	}
};
