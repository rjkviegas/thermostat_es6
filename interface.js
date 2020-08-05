$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').on('click', function() { // event listener
    thermostat.tempUp(); // update model
    updateTemperature();
  })
  $('#temperature-down').on('click', function() {
    thermostat.tempDown();
    updateTemperature();
  })
  $('#temperature-reset').click(function() {
    thermostat.resetTemp();
    updateTemperature();
  });

  $('#powersaving-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving').text('on')
    updateTemperature();
  })

  $('#powersaving-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving').text('off')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.currentTemp);
    $('#temperature').attr('class', thermostat.currentEnergyUsage());
  }
})


