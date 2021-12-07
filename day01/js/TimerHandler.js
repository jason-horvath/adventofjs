import EventBase from './EventBase.js';

export default class TimerHandler extends EventBase {
  state() {
    return {}
  }
  constructor() {
    super();
    this.bindTimerInputs();
  }

  bindTimerInputs() {
    ['minutes', 'seconds'].forEach(className => {
      let parentSelector = '.' + className;
      let inputSelector = parentSelector + ' > input';
      this.listen(parentSelector, 'click', () => {
        let input = this.select(inputSelector);
        input.disabled = false;
        input.focus();
      });
      this.bindInputBlur(inputSelector);
    });    
  }

  bindInputBlur(inputSelector) {
    this.listen(inputSelector, 'blur', (event) => {
      let input = event.target;
      let initalValue = input.value;
      if(input.value.length < 1) {
        console.log(initalValue);
        input.value = initalValue;
      }
      console.log(input.value);
      input.disabled = true;
    });
  }

  
}