var Constructor = require('./../js/other-template.js').constructorModule;


$(document).ready(function() {
  $('#generic-form').submit(function(event) {
    event.preventDefault();

  });
});

var Constructor = require('./../js/template.js').constructorModule;


$(document).ready(function() {
  $('#generic-form').submit(function(event) {
    event.preventDefault();

  });
});

// Eventually move to time.js
var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date());
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};


$(document).ready(function(){
  datetime = $('#time');
  update();
  setInterval(update, 1000);
});

var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      console.log(response);
      console.log(JSON.stringify(response));
      // paste into http://jsonprettyprint.com/ for easy to understand methods
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
