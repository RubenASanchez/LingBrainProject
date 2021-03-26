//import { activateSettings } from '../components/settings.js';

let currentState = document.getElementById('current-state');
let previousStateText = currentState.textContent;

const stateLog = ['ready',currentState.textContent];










// NEW STATE MACHINE BEGIN


// let regionData = [{
//   ba{
//     "name":"ba",
//     "location":"top",
//     "function":"eat"
//   },
//   wa: {
//     "name":"wa",
//     "location":"side",
//     "function":"laugh"
//   },
//   region3: {
//     "name":"region 3",
//     "location":"back",
//     "function":"sleep"
//   }
// }];

// display text

// let stateDisplay = document.getElementById('state-display');
// let currentTextContent = stateDisplay.textContent;
// const myArray = ['brain'];

// settings

// const settingsButton = document.getElementById('settings-button');
// let settingsEmmit = settingsButton.addEventListener('click',function() {
//   sm('settings');
// });

// filter

// const filterButton = document.getElementById('filter-button');
// let filterEmmit = filterButton.addEventListener('click',function() {
//   sm('filter');
// });

// state machine

// function sm(emitted) {
//   // console.log(`someone emitted ${emitted}`);
//   if (myArray[myArray.length-1] == emitted) {
//     myArray.pop();
//     console.log(myArray);
//   }
//   else {
//     myArray.push(emitted);
//     console.log(myArray);
//   }
//   stateDisplay.textContent = myArray[myArray.length-1];
//   return myArray, activateState();
// };

// function activateState() {
//   console.log(`activate state for ${stateDisplay.textContent}`);
//   activeComponent = stateDisplay.textContent;
//   inactiveComponents = document.querySelectorAll(".component");
//   inactiveComponents.forEach((item,i) => { // this one can be written as forEach( element => {element.dataset.state = "inactive"});
//     item.dataset.state = "inactive";
//   });
//   document.getElementById(activeComponent).dataset.state = "active";
//   if (activeComponent == 'filter') {
//     activateFilters();
//   }
//   else {
//     deactivateFilters();
//   }
// };

// function subFilterEmitt(e) {
//   let filteredRegions = e.target.id;
//   activateRegions(filteredRegions);
//   const filterNav = document.getElementById('filter-nav');
//   filterNav.removeEventListener('click',subFilterEmitt);
// }

// function activateFilters() {
//   const filterNav = document.getElementById('filter-nav');
//   filterNav.dataset.state = "active";
//   filterNav.addEventListener('click',subFilterEmitt);
// };

// function deactivateFilters() {
//   document.getElementById('filter-nav').dataset.state = "inactive";
// }

// function activateRegions(filteredregions) {
//   filteredregions = filteredregions.replace('filter-','');
//   sm(filteredregions);
//   activateRegion(filteredregions);
// };

// let filteredRegions;

// function regionEmitt(e) {
//   filteredRegions = e.target.id;
//   const regions = document.getElementById(filteredRegions);
//   sm(filteredRegions);
//   activateRegionInfo(filteredRegions);
//   regions.removeEventListener('click',regionEmitt);
//   return filteredRegions;
// };

// function activateRegion(filteredregions) {
//   const regions = document.getElementById(filteredregions);
//   regions.addEventListener('click',regionEmitt);
// };

// function activateRegionInfo(filteredregions) {
  // document.getElementById('region-info').dataset.state = "active";
  // displayRegionInfo();
  // let closeRegionInfo = document.getElementById('close-region-info');
  // closeRegionInfo.addEventListener('click',deactivateRegionInfo);
// };

// function deactivateRegionInfo() {
//   sm(filteredRegions);
//   let closeRegionInfo = document.getElementById('close-region-info');
//   document.getElementById('settings-button').dataset.button = "enabled";
//   document.getElementById('filter-button').dataset.button = "enabled";
//   closeRegionInfo.removeEventListener('click',deactivateRegionInfo);
// };

// function displayRegionInfo() {
//   let regionName = document.getElementById('region-name');
//   let regionLocation = document.getElementById('region-location');
//   let regionFunction = document.getElementById('region-function');
//   regionName.textContent = regionData[0][filteredRegions]['name'];
//   regionLocation.textContent = regionData[0][filteredRegions]['location'];
//   regionFunction.textContent = regionData[0][filteredRegions]['function'];
//   document.getElementById('settings-button').dataset.button = "disabled";
//   document.getElementById('filter-button').dataset.button = "disabled";
// };


// NEW STATE MACHINE END










var SMcurrentState = currentState.textContent;
var SMpreviousState;

function stateMachine(newEmmitedState) {
  //SMcurrentState = currentState.textContent;
  SMpreviousState = SMcurrentState;
  SMcurrentState = newEmmitedState;
  console.log(`sm previous state ${SMpreviousState}`);
  console.log(`sm current state ${SMcurrentState}`);
};


var oldState;
var newState;

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

// this does not return the updated values
//console.log(`pulled out old is ${oldState} and new is ${newState}`);
// need to make a function to handle delivering old and new states


function updateStateInfo(stateText) {
  console.log(`the updated state is currently ${stateText}`);
}

export { currentState , previousStateText , updateStateInfo , updateState, oldState , newState , stateMachine };