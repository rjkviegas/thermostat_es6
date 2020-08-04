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
    if (this.currentTemp === 10) {
      throw new Error('cannot reduce temperature below 10 degrees');
    } else {
      this.currentTemp--;
    }
  }
}
