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
      expect(thermostat.isPowerSavingModeOn).toBeTruthy(); 
    })
  });
  describe('#tempUp', function() {
    it('increases the currentTemp by 1 degree', function () {
      thermostat.tempUp();
      expect(thermostat.currentTemp).toBe(_DEFAULT_TEMP + 1);
    });
    describe('cannot increase temperature over maximum temperature', function() {
      it('in power saving mode', function() {
        for ( var i = 0; i < (_MAX_TEMP_PSM_ON - _DEFAULT_TEMP + 1); i++)  {
          thermostat.tempUp();
        } 
        expect(thermostat.currentTemp).toBe(_MAX_TEMP_PSM_ON)
      })
      it('when power saving mode off', function() {
        thermostat.switchPowerSavingModeOff();
        for ( var i = 0; i < (_MAX_TEMP_PSM_OFF - _DEFAULT_TEMP + 1); i++)  {
          thermostat.tempUp();
        } 
        expect(thermostat.currentTemp).toBe(_MAX_TEMP_PSM_OFF)
      })
    })
  });
  describe('#tempDown', function() {
    it('decreases the currentTemp by 1 degree', function() {
      thermostat.tempDown();
      expect(thermostat.currentTemp).toBe(_DEFAULT_TEMP - 1)
    });
    it(`cannot reduce the temperature below ${_MINIMUM_TEMP} degree`, function() {
      while (thermostat.currentTemp > _MINIMUM_TEMP) {
        thermostat.tempDown();
      }
      thermostat.tempDown();
      expect(thermostat.currentTemp).toBe(_MINIMUM_TEMP);
    });
  });
  describe('#switchPowerSavingModeOff', function() {
    it('turns isPowerSavingModeOn to false', function() {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn).toBe(false);
    })
  })
  describe('switchPowerSavingModeOn', function() {
    it('turn isPowerSavingModeOn to true', function() {
      thermostat.switchPowerSavingModeOff();
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn).toBe(true);
    })
  })
});
