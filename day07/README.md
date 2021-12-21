# 07 - Tip Calculator || Advent of JavaScript

This one was made using a React Context as an example of having components talk to one another based on a custom document event with `useEffect`.

It could have been done by just having the state changes in the context render the child components, but for the sake of keeping it as close to how this was described in the challenge, it is required to click the 'Calculate' button to dispatch the `calculate` document event.

The tip percentage radio buttons use a local `useState` and then send the local state to the Context for updating the percentage.