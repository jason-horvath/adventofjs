import EventBase from './EventBase.js';
import TimerState from '../state/TimerState.js';

export default class TimerHandler extends EventBase {
  
  timerWasStopped = false;

  allowedInputKeys = [
    'Backspace',
    'ArrowLeft',
    'ArrowRight'
  ]
  
  selectors = {
    minutesInput: '.minutes > input',
    ring: '.ring',
    secondsInput: '.seconds > input',
    settingsButton: 'button.settings',
    startButton: 'button.start'
  }

  timer = new TimerState(
    this.select(this.selectors.minutesInput),
    this.select(this.selectors.secondsInput)
  );

  constructor() {
    super();
    this.initBindings();
    this.timer.init();
    this.setUiState();
  }

  initBindings = () => {
    this.bindTimerEnded();
    this.bindInputs();
    this.bindSettings();
    this.bindStartButton();
  }

  bindTimerEnded = () => {
    document.addEventListener('timer-ended', (event) => {
      this.soundAlarm();
      this.setUiState();
    })
  }

  soundAlarm = () => {
    let alarm = new Audio('./sounds/alarm.wav');
    alarm.play();
  }

  bindStartButton = () => {
    this.listen(this.selectors.startButton, 'click', (event) => {
      if(this.timer.timerIsZero()) {
        return;
      }

      if(this.timer.isStopped()) {
        this.timer.start();
      } else {
        this.timer.stop();
      }

      this.setUiState();
    })
  }

  bindInputs = () => {
    ['minutes', 'seconds'].forEach(className => {
      let parentSelector = '.' + className;
      let inputSelector = parentSelector + ' > input';
      this.listen(parentSelector, 'click', () => {
        this.timerWasStopped = this.timer.isStopped();
        this.timer.stop();
        this.setUiState();
        let input = this.select(inputSelector);
        input.disabled = false;
        input.focus();
      });
      this.bindInputKeyPress(inputSelector);
      this.bindInputBlur(inputSelector);
    });    
  }

  bindInputKeyPress = (inputSelector) => {
    this.listen(inputSelector, 'keydown', (event) => {
      return this.numberOnly(event);
    }); 
  }

  bindInputBlur = (inputSelector) => {
    this.listen(inputSelector, 'blur', (event) => {
      let input = event.target;
      input.value = String(input.value).padStart(2, '0');
      console.log(input.value);
      this.validateSecondsInput();
      this.setDisableInputState(true);
      this.autoStartTimer();
      this.setUiState();
    });
  }

  bindSettings = () => {
    this.listen(this.selectors.settingsButton, 'click', (event) => {
      if(this.timer.isStopped()) {
        this.setDisableInputState(true);
        return;
      } else {
        this.setDisableInputState(false);
        this.timer.stop();
      }
      this.setUiState();
    });
  }
  
  validateSecondsInput = () => {
    let secondsInput = this.select(this.selectors.secondsInput);
    if(parseInt(secondsInput.value) > 59) {
      secondsInput.value = "59";
    }
  }
  autoStartTimer = () => {
    if(!this.timerWasStopped) {
      this.timer.start();
    }
  }

  setUiState = () => {
    let startButton = this.select(this.selectors.startButton);
    if(this.timer.isStopped()) {
      startButton.innerHTML = 'Start';
      this.select(this.selectors.ring).classList.add('ending');
    } else {
      startButton.innerHTML = 'Pause';
      this.select(this.selectors.ring).classList.remove('ending');
    }
  }

  setDisableInputState = (boolState) =>{
    this.select(this.selectors.minutesInput).disabled = boolState;
    this.select(this.selectors.secondsInput).disabled = boolState;
  }

  numberOnly = (event) => {
    let key = event.key;
    if (!/[0-9]/.test(key) && !this.allowedInputKeys.includes(key)) {
      event.preventDefault();
    } else {
      return event;
    }
  }
}