# Day 01 - The Pomodoro Timer

This one was done with a few vanilla JS Modules.

### Features
- Individual input editing on click.
- The timer will restart on blur of inputs if the timer was previously running before editing.
- Inputs only allow numbers, backspace, left arrow, and right arrow keys.
- Seconds input can not be over 59.
- Plays an alarm sound when done.
- `event/TimerHandler.js` works with the input events to update the UI and pass values to the `TimerState` class.
- `state/TimerState.js` controls the timer values, start/stop process, and emits custom event when done.