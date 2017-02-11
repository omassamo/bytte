function listItems() {
axios.get("https://api.airtable.com/v0/appA2Ta4a0stQkxMY/items?maxRecords=3&view=Main%20View&api_key=keycGQqA0T3nBwQay")
	.then(function (response) {
		console.log(response);
	})
	.catch(function (error) {
    	console.log(error);
  });
};

