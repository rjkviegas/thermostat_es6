$(document).ready(function() {
  $('#powersaving-on').hide();
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').on('click', function() { // event listener
    thermostat.tempUp(); // update model
    incr();
    updateTemperature();
  })
  $('#temperature-down').on('click', function() {
    thermostat.tempDown();
    updateTemperature();
  })
  $('#temperature-reset').click(function() {
    thermostat.resetTemp();
    alert("Please be aware PSM is unchanged");
    updateTemperature();
  });

  $('#powersaving-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#powersaving-on').hide();
    $('#powersaving-off').show();
    $('#power-saving-status').text('ON')
    updateTemperature();
  })

  $('#powersaving-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#powersaving-off').hide();
    $('#powersaving-on').show();
    $('#power-saving-status').text('OFF')
    updateTemperature();
  })

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })
  
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp);
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.currentTemp);
    $('#temperature').attr('class', thermostat.currentEnergyUsage());
  }

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#city-temperature').text(data.main.temp);
    })
    $('#city-name').text(city)
  }

  function incr() {
    var v1=document.getElementsByClassName('progress-bar').value;
    document.getElementsByClassName("progress-bar").value= v1 + 10;
    }
})


