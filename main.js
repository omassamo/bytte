// read-only api key
api_key = "keyALw6H4JrUhpfbl"

// get list of records
function listRecords() {
axios.get("https://api.airtable.com/v0/appA2Ta4a0stQkxMY/items?maxRecords=3&view=Main%20View&api_key="+api_key)
	.then(function (response) {
		console.log(response);
	})
	.catch(function (error) {
    	console.log(error);
  });
};

// get specific record
function retrieveRecord() {
axios.get("https://api.airtable.com/v0/appA2Ta4a0stQkxMY/items/recFtcsmEsrFen18y&api_key="+api_key)
	.then(function (result) {
		console.log(result);
	})
	.catch(function (error) {
    	console.log(error);
  });
};


