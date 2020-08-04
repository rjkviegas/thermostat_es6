'use strict';

const _DEFAULT_TEMP = 20;
const _MINIMUM_TEMP = 10;

class Thermostat {
  constructor() {
    this.currentTemp = _DEFAULT_TEMP;
    this.powerSavingMode = true;
    this.maxTemp = 25;
  }
  tempUp() {
    this.currentTemp++;
  }
  tempDown() {
    if (this.currentTemp === _MINIMUM_TEMP) {
      throw new Error('cannot reduce temperature below 10 degrees');
    } else {
      this.currentTemp--;
    }
  }
  powerSavingModeSwitch() {
    this.powerSavingMode = false;
  }
}
