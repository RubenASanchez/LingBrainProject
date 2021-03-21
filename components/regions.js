// brain regions component logic goes here
import { currentState , previousStateText , updateStateInfo , updateState , newState} from '../js/statemachine.js';

// if (currentState.textContent === "ready") {
//   console.log('regions component currentState says "Im Ready"');
// }

const activateReady() {
  if (newState === "ready") {
    console.log('regions component newState says "Im Ready"');
  }
};

activateReady();