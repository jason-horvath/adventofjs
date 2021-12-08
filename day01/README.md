# Day 01 - The Pomodoro Timer

I wrote a few vanilla JS Modules to handle the timer state and event logic.

### Features
- Individual input editing on click while the timer is running.
- The timer will restart on blur of individual input edits if the timer was previously running before editing.
- Inputs only allow numbers, backspace, left arrow, and right arrow keys.
- Seconds input can not be over 59.
- Plays an alarm sound when done.
- `event/TimerHandler.js` works with the input events to update the UI and pass values to the `TimerState` class.
- `state/TimerState.js` controls the timer values, start/stop process, and emits custom event when done.