// the state in redux comes from reducers WHICH IS HERE
// access the state in a stateful component using this.prop
// CANNOT PUT ASYNCRONOUS LOGIC HERE

import { SAVE_BUSSTOP, REMOVE_BUSSTOP, SAVE_CURRENT_BUSSTOP, CURRENT_PAGE, INVALID_BUSSTOP} from '../constants';

const initialState = {
	currentPage: '',
	savedBusstop: [],
	busInfoPage: {
		number: '',
		data: []
	}
};

const rootReducer = (state = initialState, action) => {
	if (action.type === SAVE_BUSSTOP) {
		return Object.assign({}, state, {
			savedBusstop: [
				...state.savedBusstop,
				action.payload
			]
		});
	} else if (action.type === REMOVE_BUSSTOP) {
		return Object.assign({}, state, {
			savedBusstop: state.savedBusstop.filter(item => {
				if (item === action.payload) {
					return false;
				}
				return true;
			})
		});
	} else if (action.type === SAVE_CURRENT_BUSSTOP) {
		return {
			...state,
			busInfoPage: {
				number: action.payload.BusStopCode,
				data: action.payload.Services
			}
		}
	} else if (action.type === CURRENT_PAGE) {
		return Object.assign({}, state, {
			currentPage: action.payload
		});
	} else if (action.type === INVALID_BUSSTOP) {
		console.log(state);
	}
	return state;
}

export default rootReducer;