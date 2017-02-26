
// Retrieve all records (GET https://api.airtable.com/v0/appA2Ta4a0stQkxMY/items)

function retrieveAllRecords() {
	
jQuery.ajax({
    url: "https://api.airtable.com/v0/appA2Ta4a0stQkxMY/items",
    type: "GET",
    data: {
        "view": "Main View",
        "limit": "10",
        "sortField": "name",
        "sortDirection": "asc",
    },
    headers: {
        "Cookie": "AWSELB=D56969891269DB507B93D0B4351AA84712318BD187A066ABDABF0F0282AA31C097FC319D6006438D8BF0F5DE288B5A7B70196632F9B4264E2A6CEE3FB39A4B69FAE6732172",
        "Authorization": "Bearer keyALw6H4JrUhpfbl",
    },
})
.done(function(data, textStatus, jqXHR) {
    console.log("HTTP Request Succeeded: " + jqXHR.status);
    console.log(data);
})
.fail(function(jqXHR, textStatus, errorThrown) {
    console.log("HTTP Request Failed");
})
.always(function() {
    /* ... */
});

};

// Retrieve single record (GET https://api.airtable.com/v0/appA2Ta4a0stQkxMY/items/rec8OXQJUYYnNZYVJ)
$(document).ready(function() {

	jQuery.ajax({
    url: "https://api.airtable.com/v0/appA2Ta4a0stQkxMY/items/rec8OXQJUYYnNZYVJ",
    type: "GET",	
    dataType: "json",
    headers: {
        "Cookie": "AWSELB=D56969891269DB507B93D0B4351AA84712318BD187A066ABDABF0F0282AA31C097FC319D6006438D8BF0F5DE288B5A7B70196632F9B4264E2A6CEE3FB39A4B69FAE6732172",
        "Authorization": "Bearer keyALw6H4JrUhpfbl",
        "Content-Type": "application/octet-stream",
    },
})
.done(function(data, textStatus, jqXHR) {
    console.log("HTTP Request Succeeded: " + jqXHR.status);
  	console.log(data.fields.images[0].url)
  	console.log(data);
  	// $("#records").append("<h1>" + data.fields.name +  "</h1><div>Beskrivelse: " + data.fields.description + "</div><img class='img-responsive' src='" + data.fields.images[0].url + "'><div>Adresse: "  + data.fields.address +  "</div><div>Kan hentes: "  + data.fields.days + " mellem " + data.fields.timestart + " 	og " + data.fields.timeend + "</div><div class='text-muted'>Oprettet: "  + data.createdTime +  "</div>");
  	$("#title").append(data.fields.name);
  	$("#description").append(data.fields.description);
  	$("#images").append("<img class='img-responsive' src='" + data.fields.images[0].url + "'>");
  	$("#address").append(data.fields.address);
  	$("#pick-up").append(data.fields.days + " mellem " + data.fields.timestart + " og " + data.fields.timeend );
  	$("#created").append(data.createdTime);


})
.fail(function(jqXHR, textStatus, errorThrown) {
    console.log("HTTP Request Failed");
})
.always(function() {
    /* ... */

});

});









