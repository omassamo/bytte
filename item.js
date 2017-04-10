// Retrieve single record (GET https://api.airtable.com/v0/appA2Ta4a0stQkxMY/items/rec8OXQJUYYnNZYVJ)

// Get id from url 

function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var id = getParameterByName('id');

// var id = "rec8OXQJUYYnNZYVJ";


var mapsKey = "AIzaSyCDgbDR36eO0ZsFnO6wtx1TejGmWqNogRY";

$(document).ready(function() {

	jQuery.ajax({
    url: "https://api.airtable.com/v0/appA2Ta4a0stQkxMY/items/" + id,
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
  	// console.log(data.fields.images[0].url)

  	console.log(data);
  	// $("#records").append("<h1>" + data.fields.name +  "</h1><div>Beskrivelse: " + data.fields.description + "</div><img class='img-responsive' src='" + data.fields.images[0].url + "'><div>Adresse: "  + data.fields.address +  "</div><div>Kan hentes: "  + data.fields.days + " mellem " + data.fields.timestart + " 	og " + data.fields.timeend + "</div><div class='text-muted'>Oprettet: "  + data.createdTime +  "</div>");
  	$("#title").append(data.fields.name);
  	$("#description").append(data.fields.description);
  	if (data.fields.images !== undefined ) {
      
      // Show first image
      // $("#images").append("<img class='img-responsive' src='" + data.fields.images[0].url + "'>");    

      // Loop through and append all images
      $.each( data.fields.images, function(i, val){
      $("#images").append("<div class='col-md-3'><a data-toggle='lightbox'><img class='img-responsive' src='" + data.fields.images[i].url + "'></a></div>");
      })
      }
      else {
        console.log('no images');
      };

  	$("#address").append(data.fields.address);
    $("#map").append("<iframe src='//www.google.com/maps/embed/v1/place?q=" + data.fields.address + "&zoom=17&key=AIzaSyCDgbDR36eO0ZsFnO6wtx1TejGmWqNogRY'></iframe>");
  	$("#pick-up").append(data.fields.days + " mellem " + data.fields.timestart + " og " + data.fields.timeend );
  	$("#created").append(data.createdTime);

    $(function () {
      $('#emailLink').on('click', function () {
        event.preventDefault();
        // alert("Huh");
        var email = data.fields.contactEmail;
        var subject = 'Jeg vil gerne hente ' + data.fields.name;
        var emailBody = 'Hej. Jeg har set du gerne vil give ' + data.fields.name + ' væk. Den vil jeg meget gerne have. Jeg kommer indenfor det tidsrum du har angivet.';
        window.location.href = 'mailto:' + email + '?subject=' + subject + '&body=' +  emailBody;
        
      });
  });

});

// .fail(function(jqXHR, textStatus, errorThrown) {
//     console.log("HTTP Request Failed");
// });

// .always(function() {
//     /* ... */

// });

});








