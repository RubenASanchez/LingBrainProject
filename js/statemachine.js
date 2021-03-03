//import { activateSettings } from '../components/settings.js';

let currentState = document.getElementById('current-state');
let previousStateText = currentState.textContent;

const stateLog = [];
let oldState = stateLog[0];
let newState = stateLog[1];

function updateState(emittedState) {
  stateLog.push(emittedState);
  console.log(`old state is ${oldState}`);
  console.log(`new state is ${newState}`);
  if (stateLog.length > 2) {
    stateLog.shift();
  }
}



function updateStateInfo(stateText) {
  console.log(`the updated state is currently ${stateText}`);
}

export { currentState , previousStateText , updateStateInfo , updateState};