// the state in redux comes from reducers WHICH IS HERE
// access the state in a stateful component using this.prop
const initialState = {
	savedBusstop: [{
		number: 12345
	}],
	currentBusstop: {
		number: 'weew',
		data: {lala: 'lala'}
	}
};

const rootReducer = (state = initialState, action) => {
	if (action.type === 'SAVE_BUSSTOP') {
		return Object.assign({}, state, {
			savedBusstop: state.savedBusstop.concat(action.payload)
		});
	}
	else if (action.type === 'CURRENT_BUSSTOP') {
		return Object.assign({}, state, {
        	currentBusstop: {
        		number: action.payload.number,
        		data: action.payload.data
        	}
      	})
	}
	return state;
}

export default rootReducer;