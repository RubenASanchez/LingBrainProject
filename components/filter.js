import { currentState , previousStateText , updateStateInfo , updateState , oldState , newState} from '../js/statemachine.js';

let filterButton = document.getElementById('filter-button');

let activateFilter = filterButton.addEventListener('click',function() {
  filterButton.classList.toggle('filter-active');
  if (filterButton.classList.contains('filter-active')) {
    currentState.textContent = "filter";
    updateStateInfo(currentState.textContent);
    updateState(currentState.textContent); // for array
  }
  else {
    //currentState.textContent = previousStateText;
    currentState.textContent = oldState;
    updateStateInfo(currentState.textContent);
    updateState(currentState.textContent); // for array
  }
});

export { activateFilter };