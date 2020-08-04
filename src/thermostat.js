'use strict';
const _DEFAULT_TEMP = 20;
class Thermostat {
  constructor() {
    this.currentTemp = _DEFAULT_TEMP;
  }
  tempUp() {
    this.currentTemp++;
  }
  tempDown() {
    this.currentTemp--;
  }
}
