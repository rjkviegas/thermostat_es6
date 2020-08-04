'use strict';

describe('Thermostat', function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  })
  describe('#constructed', function() {
    it('current temp is 20 degrees', function() {
      expect(thermostat.currentTemp).toBe(_DEFAULT_TEMP);
    });
    it('powerSavingMode is on', function() {
      expect(thermostat.powerSavingMode).toBeTruthy(); 
    })
    it('maximum temperature is 25 degrees', function() {
      expect(thermostat.maxTemp).toBe(25);
    })
  });
  describe('#tempUp', function() {
    it('increases the currentTemp by 1 degree', function () {
      thermostat.tempUp();
      expect(thermostat.currentTemp).toBe(_DEFAULT_TEMP + 1);
    });
  });
  describe('#tempDown', function() {
    it('decreases the currentTemp by 1 degree', function() {
      thermostat.tempDown();
      expect(thermostat.currentTemp).toBe(_DEFAULT_TEMP - 1)
    });
    it('cannot reduce the temperature below 10 degrees', function() {
      while (thermostat.currentTemp > _MINIMUM_TEMP) {
        thermostat.tempDown();
      }
      expect(function() {
        thermostat.tempDown();
      }).toThrowError('cannot reduce temperature below 10 degrees');
    });
  });
  describe('#powerSavingModeSwitch', function() {
    it('turns powerSavingMode to false', function() {
      thermostat.powerSavingModeSwitch();
      expect(thermostat.powerSavingMode).toBeFalsy();
    })
  })
});
