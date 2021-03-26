import { currentState , previousStateText , updateStateInfo , updateState , newState} from '../js/statemachine.js';

let filterButton = document.getElementById('filter-button');

function activateReady() {
  if (currentState.textContent === "ready") {
    console.log('regions component newState says "Im Ready"');
    filterButton.classList.add('filter-button-ready');
  }
  else {
    filterButton.classList.remove('filter-button-ready');
  }
};

activateReady();

export { activateReady };