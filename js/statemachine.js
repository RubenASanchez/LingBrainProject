//import { activateSettings } from '../components/settings.js';

let currentState = document.getElementById('current-state');
let previousStateText = currentState.textContent;

const stateLog = [];

function updateState(emittedState) {
  stateLog.push(emittedState);
  if (stateLog.length > 2) {
    stateLog.shift();
  }
}

updateState(currentState);
console.log(stateLog);

let oldState = stateLog[0];
let newState = stateLog[1];

console.log(`old state is ${oldState}`);
console.log(`new state is ${newState}`)



function updateStateInfo(stateText) {
  console.log(`the updated state is currently ${stateText}`);
}

export { currentState , previousStateText , updateStateInfo , updateState};