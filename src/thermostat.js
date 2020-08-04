'use strict';

const _DEFAULT_TEMP = 20;
const _MINIMUM_TEMP = 10;
const _MAX_TEMP_PSM_OFF = 32;
const _MAX_TEMP_PSM_ON = 25;


class Thermostat {
  constructor() {
    this.currentTemp = _DEFAULT_TEMP;
    this.isPowerSavingModeOn = true;
  }
  tempUp() {
    if (this.isMaxTemp()) {
      return;
    }
    this.currentTemp++;
  }
  tempDown() {
    if (this.currentTemp === _MINIMUM_TEMP) {
      return;
    }
    this.currentTemp--;
  }
  switchPowerSavingModeOff() {
    this.isPowerSavingModeOn = false;
  }
  switchPowerSavingModeOn() {
    this.isPowerSavingModeOn = true;
  }
  isMaxTemp() {
    if (this.isPowerSavingModeOn === true) {
      return this.currentTemp === _MAX_TEMP_PSM_ON ;
    } else {
      return this.currentTemp === _MAX_TEMP_PSM_OFF;
    }
  }

}
