class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = 0
    this.currentTimeMilSec = 0
    this.intervalIdMilSec = 0
  }
  startClick(callback) {
    // ... your code goes here
    // ...faltaba llamar al callback() que luego será printNumbers, pero da error en Jasmine
    this.intervalId = setInterval(() => {
      this.currentTime++, 
      typeof callback === 'function' && (callback())
    }, 1000);
  }

  startClickMilSec(callback) {
    // ... your code goes here
    // ...faltaba llamar al callback() que luego será printNumbers, pero da error en Jasmine
    this.intervalIdMilSec = setInterval(() => {
      this.currentTimeMilSec++, 
      typeof callback === 'function' && (callback())
    }, 10);
  }

  getMinutes() {
    // ... your code goes here
    const minutes = Math.floor(this.currentTime / 60)
    return minutes
  }

  getSeconds() {
    // ... your code goes here
    const seconds = Math.floor(this.currentTime - this.getMinutes() * 60)
    return seconds
  }

  getMilliseconds() {
    const miliSec = Math.floor(this.currentTimeMilSec)
    return miliSec;
  }

  twoDigitsNumber(num) {
    // ... your code goes here
    const dobleNum = num.toString()
    if (dobleNum.length === 2) {
      return dobleNum
    } else if (dobleNum.length < 2) {
      return "0" + dobleNum
    }
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0
  }
  splitClick() {
    // ... your code goes here
    let min = this.twoDigitsNumber(this.getMinutes())
    let sec = this.twoDigitsNumber(this.getSeconds())

    return min + ":" + sec
  }
}
