// Retrieve all records (GET https://api.airtable.com/v0/appA2Ta4a0stQkxMY/items)
$(document).ready(function() {
  
jQuery.ajax({
    url: "https://api.airtable.com/v0/appA2Ta4a0stQkxMY/items",
    type: "GET",
    dataType: "json",
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
    
// jQuery each loop

    $.each( data.records, function(i, val){
      console.log(data.records[i].fields.name);
      console.log(data.records[i].id);
      $("#records").append("<li><a href='item.html?id=" + data.records[i].id + "'>" + data.records[i].fields.name + "</a></li>");
    })
})
.fail(function(jqXHR, textStatus, errorThrown) {
    console.log("HTTP Request Failed");
})
.always(function() {
    /* ... */
});

});