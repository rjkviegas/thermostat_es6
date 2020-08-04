'use strict';

describe('Thermostat', function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  })
  describe('when constructed', function() {
    it('current temp is 20 degrees', function() {
      expect(thermostat.currentTemp).toBe(20);
    });
  });
  describe('#tempUp increases the currentTemp by 1 degree', function() {
    it('changes the currentTemp to 21 degrees', function () {
      thermostat.tempUp();
      expect(thermostat.currentTemp).toBe(21);
    });
  });
  describe('#tempDown decreases the currentTemp by 1 degree', function() {
    it('changes the currentTemp to 19 degrees', function() {
      thermostat.tempDown();
      expect(thermostat.currentTemp).toBe(19)
    });
  });
});
