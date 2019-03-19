export const saveBusstop = (payload) => {
	return { type: 'SAVE_BUSSTOP', payload };
}

export const currentBusstop = (payload) => {
	return { type: 'CURRENT_BUSSTOP', payload };
}