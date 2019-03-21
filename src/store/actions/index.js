import axios from 'axios';

export const saveBusstop = (payload) => {
	return { type: 'SAVE_BUSSTOP', payload };
}

export const setCurrentPage = (payload) => {
	return { type: 'CURRENT_PAGE', payload };
}

export const getBusstopData = (busstopNumber) => {
	return (dispatch) => {
		axios.get('http://localhost:5000/api/busstopNumber', {
			params: {
				busstopNumber
			}
		})
		.then(res => {
			dispatch(BusstopDataSaved(res.data))
		})
		.catch(err => {
			dispatch(BusstopDataNotSaved(err.message))
		})
	};
};

export const BusstopDataSaved = (data) => {
	return { type:'SAVE_CURRENT_BUSSTOP', payload: data }
}

export const BusstopDataNotSaved = (payload) => {
	return { type:'FAILEDTOSAVE_CURRENT_BUSSTOP', payload }
}