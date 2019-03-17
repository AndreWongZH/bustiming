// the state in redux comes from reducers WHICH IS HERE
// access the state in a stateful component using this.prop
const initialState = {
	articles: [{
		busNumber: 3
	}]
};

const rootReducer = (state = initialState, action) => {
	if (action.type === 'ADD_ARTICLE') {
		return Object.assign({}, state, {
			articles: state.articles.concat(action.payload)
		});
	}
	return state;
}

export default rootReducer;