// the state in redux comes from reducers WHICH IS HERE
// access the state in a stateful component using this.prop
// CANNOT PUT ASYNCRONOUS LOGIC HERE
const initialState = {
	currentPage: 'qwert',
	savedBusstop: [{
		number: 12345
	}],
	busInfoPage: {
		number: '',
		data: []
	}
};

const rootReducer = (state = initialState, action) => {
	if (action.type === 'SAVE_BUSSTOP') {
		return Object.assign({}, state, {
			savedBusstop: state.savedBusstop.concat(action.payload)
		});
	} else if (action.type === 'SAVE_CURRENT_BUSSTOP') {
		console.log(action)
		return {
			...state,
			busInfoPage: {
				number: action.payload.BusStopCode,
				data: action.payload.Services
			}
		}
	} else if (action.type === 'CURRENT_PAGE') {
		return Object.assign({}, state, {
			currentPage: action.payload
		});
	} else if (action.type === 'INVALID_BUSSTOP') {
		console.log(state);
	}
	return state;
}

export default rootReducer;