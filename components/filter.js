import { currentState , previousStateText , updateStateInfo } from '../js/statemachine.js';

let filterButton = document.getElementById('filter-button');

let activateFilter = filterButton.addEventListener('click',function() {
  console.log('clicked filter');
  filterButton.classList.toggle('filter-active');
  currentState.textContent = "filter";
  updateStateInfo(currentState.textContent);
});

export { activateFilter };