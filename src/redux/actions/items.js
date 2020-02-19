import types from "../action-constants/items";

export const setEmpty = empty => dispatch => {
	dispatch({
		type: types.SET_EMPTY,
		payload: {
			empty: empty
		}
	});
};

export const setFilled = (id, number, empty) => dispatch => {
	let emptyClone = {...empty};
	delete emptyClone[id];

	dispatch({
		type: types.SET_FILLED,
		payload: {
			filledItem: {
				[id] : number
			},
			empty: emptyClone
		}
	});
};

export const filling = () => dispatch => {
	dispatch({
		type: types.FILLING,
		payload: {
			filling: true
		}
	});
};

export const clear = recreate => dispatch => {
	dispatch({
		type: types.FILLING,
		payload: {
			empty: {},
			filled: {},
			filling: false,
			recreate: ++recreate
		}
	});
};

export const stop = () => dispatch => {
	dispatch({
		type: types.STOP,
		payload: {
			filling: false
		}
	});
};