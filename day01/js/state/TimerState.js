export default class TimerState {
  
  timerEndedEvent = new Event('timer-ended');

  value = {
    minutes: '00',
    seconds: '00',
    stopped: true
  }

  inputs = {
    minutes: null,
    seconds: null
  }
  
  timerProcess = null;

  interval = 1000;

  constructor(minutesInput, secondsInput) {
    if(minutesInput === undefined || secondsInput === undefined) {
      throw Error('Make sure to pass selected input elements to TimerState class.');
    }
    this.inputs.minutes = minutesInput;
    this.inputs.seconds = secondsInput;
  }
  
  start = () => {
    this.value.stopped = false;
    this.resetTimerProcess();
  }

  stop = () => {
    this.value.stopped = true;
  }

  isStopped() {
    return this.value.stopped;
  }

  getInputValues = () => {
    return {
      minutes: this.inputs.minutes.value,
      seconds: this.inputs.seconds.value
    }
  }

  getTimerValues = () => {
    let minutes = parseInt(this.value.minutes);
    let seconds = parseInt(this.value.seconds);
    return {
      minutes: minutes,
      seconds: seconds
    }
  }

  timerIsZero = () => {
    let timer = this.getInputValues();
    return (parseInt(timer.minutes) === 0 && parseInt(timer.seconds) === 0);
  }

  setTimerValues = (timer) => {
    let updatedTimer = this.stringifyTimerValues(timer);
    this.value = {...this.value, ...updatedTimer};
  }

  setInputValues = (timer) => {
    let stringedTimer = this.stringifyTimerValues(timer);
    this.inputs.minutes.value = stringedTimer.minutes;
    this.inputs.seconds.value = stringedTimer.seconds;
  }

  stringifyTimerValues = (timer) => {
    return {
      minutes: String(timer.minutes).padStart(2, '0'),
      seconds: String(timer.seconds).padStart(2, '0')
    }
  }

  updateTimerCycle = (timerValues) => {
    this.setTimerValues(timerValues);
    this.setInputValues(timerValues);
  }

  startTimerProcess = () => {
    const inputValues = this.getInputValues();
    this.setTimerValues(inputValues);
    this.timerProcess = setInterval(() => {
      if(this.value.stopped === false) {
        let timer = this.getTimerValues();
        if(timer.minutes === 0 && timer.seconds === 0) {
          this.value.stopped = true;
          document.dispatchEvent(this.timerEndedEvent);
          return;
        }
        if(timer.minutes > 0 && timer.seconds === 0) {
          timer.minutes--;
          timer.seconds = 59;
        } else {
          timer.seconds--;
        }
        this.updateTimerCycle(timer);    
      }
    }, this.interval);
  }

  resetTimerProcess = () => {
    clearInterval(this.timerProcess);
    this.startTimerProcess();
  }

  init = () => {
    this.startTimerProcess();
  }
};