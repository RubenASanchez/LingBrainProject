//import { activateSettings } from '../components/settings.js';

let currentState = document.getElementById('current-state');
let previousStateText = currentState.textContent;

const stateLog = ['ready',currentState.textContent];

function updateState(emittedState) {
  let oldState = stateLog[0];
  let newState = stateLog[1];
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