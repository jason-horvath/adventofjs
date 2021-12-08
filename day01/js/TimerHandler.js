import EventBase from './EventBase.js';
import TimerState from './state/TimerState.js';

export default class TimerHandler extends EventBase {
  
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
      this.setUiState();
    })
  }
  bindStartButton = () => {
    this.listen(this.selectors.startButton, 'click', (event) => {
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
        this.timer.stop();
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
      this.setDisableInputState(true);
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