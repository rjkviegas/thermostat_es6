'use strict';

describe('Thermostat', function() {
  var thermostat;
  describe('when constructed', function() {
    it('current temp is 20 degrees', function() {
      thermostat = new Thermostat();
      expect(thermostat.currentTemp).toBe(20);
    });
  });
  describe('#tempUp increases the currentTemp by 1 degree', function() {
    it('changes the currentTemp to 21 degrees', function () {
      thermostat = new Thermostat();
      thermostat.tempUp();
      expect(thermostat.currentTemp).toBe(21);
    });
  });
});
