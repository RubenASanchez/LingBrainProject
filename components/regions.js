// brain regions component logic goes here
import { currentState , previousStateText , updateStateInfo , updateState} from '../js/statemachine.js';

if (currentState.textContent === "ready") {
  console.log('regions component says "Im Ready"');
}