'use strict';

describe('Thermostat', function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  })
  describe('isMaxTemp', function() {
    it('returns true when temperature is at maximum temperature', function() {
      for ( var i = 0; i < 5; i++ ) {
        thermostat.tempUp();
      }
      expect(thermostat.isMaxTemp()).toBe(true);
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isMaxTemp()).toBe(false)
    })
  })
});
