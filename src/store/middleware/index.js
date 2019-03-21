
export const checkValidBusstop = ({ dispatch }) => {
	return (next) => {
		return (action) => {
			if (action.type === 'SAVE_CURRENT_BUSSTOP') {
				const re = new RegExp('^[0-9]{5}$');
				if (!re.test(action.payload.BusStopCode)) {
					// If busstop code is not valid
					return dispatch({ type: 'INVALID_BUSSTOP'});
				}
			}
			return next(action);
		};
	};
}
