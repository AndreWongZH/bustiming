const axios = require('axios');

module.exports = (app) => {
	app.get('/api/busstopNumber', (req, res) => {
		url = 'http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=' + req.query.busstopNumber;
		console.log(url);
		axios.get(url, {
			headers: {
				AccountKey: '5ka0OkNOSFizAJDBe3K0Cg=='
			}
		}).then((response) => {
			res.send(response.data);
		});
	})
}