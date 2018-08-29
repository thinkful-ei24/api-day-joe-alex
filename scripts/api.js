const api = function() {
	const BASE_URL = 'https://thinkful-list-api.herokuapp.com/joealex';

	const getItems = callback => callback('callback is working');

	return {
		getItems
	};
} ();