'use strict';

describe('Thermostat', function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  })
  describe('when constructed', function() {
    it('current temp is 20 degrees', function() {
      expect(thermostat.currentTemp).toBe(_DEFAULT_TEMP);
    });
  });
  describe('#tempUp increases the currentTemp by 1 degree', function() {
    it('changes the currentTemp to 21 degrees', function () {
      thermostat.tempUp();
      expect(thermostat.currentTemp).toBe(_DEFAULT_TEMP + 1);
    });
  });
  describe('#tempDown decreases the currentTemp by 1 degree', function() {
    it('changes the currentTemp to 19 degrees', function() {
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
    })
  });
});
