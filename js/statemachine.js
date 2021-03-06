//import { activateSettings } from '../components/settings.js';

let currentState = document.getElementById('current-state');
let previousStateText = currentState.textContent;

const stateLog = ['ready',currentState.textContent];

let oldState;
let newState;

function updateState(emittedState) {
  console.log(`initial log is ${stateLog}`)
  stateLog.push(emittedState);
  console.log(`after push log is ${stateLog}`)
  while (stateLog.length > 2) {
    stateLog.shift();
  }
  oldState = stateLog[0];
  newState = stateLog[1];
  console.log(`after shift log is ${stateLog}`)
  console.log(`old state is ${oldState}`);
  console.log(`new state is ${newState}`);
  return oldState,newState;
}

console.log(`pulled out old is ${oldState} and new is ${newState}`);



function updateStateInfo(stateText) {
  console.log(`the updated state is currently ${stateText}`);
}

export { currentState , previousStateText , updateStateInfo , updateState};