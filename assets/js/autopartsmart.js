//XBSX41
var auto = function(kenteken) {
  console.log(kenteken);
  fetch('https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=' + kenteken)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      // console.log(myJson[0]);
      autoBot.showCarDetails(myJson[0]);
    });
}
