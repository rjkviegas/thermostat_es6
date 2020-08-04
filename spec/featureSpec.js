'use strict';

describe('Thermostat', function() {
  var thermostat;
  describe('when constructed', function() {
    it('current temp is 20 degrees', function() {
      thermostat = new Thermostat();
      expect(thermostat.currentTemp()).toBe(20);
    });
  });
});