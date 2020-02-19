import types from "../action-constants/items";

const initState = {
	empty: {},
	filled: {},
	filling: false,
	recreate: 1,
	size: 10
};
const itemsReducer = (state = initState, action) => {
	const {type, payload} = action;

	switch (type) {
		case types.SET_EMPTY:
		case types.FILLING:
		case types.CLEAR:
		case types.STOP:
			return {
				...state,
				...payload
			};
		case types.SET_FILLED:
			return {
				...state,
				filled: {
					...state.filled,
					...payload.filledItem
				},
				empty: {...payload.empty}
			};
		default:
			return state;
	}
};

export default itemsReducer;