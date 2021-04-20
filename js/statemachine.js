//import { activateSettings } from '../components/settings.js';

// DISPLAY CURRENT STATE

let stateDisplay = document.getElementById('current-state');

// HOLD CURRENT STATE

const stateLog = ['brain'];
console.log(stateLog);

// CONTRIVED DATA OBJECT ARRAY

let regionData = [{
  Brocas_Area:{
    "name":"Broca's Area",
    "location":"Brodmann Area: 44 & 45",
    "function":"It's role in production, syntax, lexical access as well as articulatory representation is under investigation."
  },
  Wernickes_Area: {
    "name":"Wernicke's Area",
    "location":"Posterior Temporal Gyrus",
    "function":"Phonological representation."
  },
  Arcuate_Fascicullus: {
    "name":"Arcuate Fascicullus",
    "location":"Left Temporal Lobe",
    "function":"Fascilitates communication between Broca's area and Wernicke's area."
  },
  Primary_Auditory_Cortex: {
    "name":"Primary Auditory Cortex",
    "location":"Brodmann Area: 41 & 42",
    "function":""
  },
  Auditory_Association_Cortex: {
    "name":"Auditory Association Cortex",
    "location":"Brodmann Area: 22",
    "function":""
  },
  bi: {
    "name":"bi",
    "location":"bees nest",
    "function":"busy bee buzz"
  },
  wi: {
    "name":"wi",
    "location":"world wide web",
    "function":"cat memes"
  },
  bo: {
    "name":"bo",
    "location":"in the closet",
    "function":"boo jump scare haha"
  },
  wo: {
    "name":"wo",
    "location":"huh",
    "function":"woah"
  },
  bu: {
    "name":"bu",
    "location":"near the blue sea",
    "function":"dream"
  },
  wu: {
    "name":"wu",
    "location":"in the trees",
    "function":"wut"
  }
}];

// SETTINGS BUTTON & FILTER BUTTON EMITT SIGNAL

const settingsButton = document.getElementById('settings-button');
let settingsEmmit = settingsButton.addEventListener('click',function() {
  sm('settings');
});

const filterButton = document.getElementById('filter-button');
let filterEmmit = filterButton.addEventListener('click',function() {
  sm('filter');
  removeOnboardingAnimation();
});

// STATE MACHINE RECEIVES EMITTED SIGNAL & UPDATES CURRENT STATE

function sm(emitted) {
  //console.log(`someone emitted ${emitted}`);
  if (stateLog[stateLog.length-1] == emitted) {
    stateLog.pop();
    console.log(stateLog);
  }
  else {
    stateLog.push(emitted);
    console.log(stateLog);
  }
  stateDisplay.textContent = stateLog[stateLog.length-1];
  activateState();
  stateDisplay.textContent = stateDisplay.textContent.replace('_',' '); /* for displaying name without line */
  return stateLog;
};

// STATE MACHINE ACTIVATES & DEACTIVATES COMPONENTS

function activateState() {
  console.log(`activate state for ${stateDisplay.textContent}`);
  let activeComponent = stateDisplay.textContent;
  let inactiveComponents = document.querySelectorAll(".component");
  inactiveComponents.forEach((item,i) => {
    item.dataset.state = "inactive";
  });
  inactiveComponents.forEach( element => {element.dataset.state = "inactive"});
  document.getElementById(activeComponent).dataset.state = "active";
  if (activeComponent == 'filter') {
    activateFilters();
  }
  else {
    deactivateFilters();
  }
};

// ACTIVATE & DEACTIVATE FILTERS

function subFilterEmitt(e) {
  let filteredRegions = e.target.id;
  activateRegions(filteredRegions);
  const filterNav = document.getElementById('filter-nav');
  filterNav.removeEventListener('click',subFilterEmitt);
}

function activateFilters() {
  document.getElementById('filter-button').dataset.state = "inactive";
  const filterNav = document.getElementById('filter-nav');
  filterNav.dataset.state = "active";
  filterNav.addEventListener('click',subFilterEmitt);
};

function deactivateFilters() {
  document.getElementById('filter-button').dataset.state = "active";
  document.getElementById('filter-nav').dataset.state = "inactive";
}

// ACTIVATE & DEACTIVATE REGIONS

function activateRegions(filteredregions) {
  filteredregions = filteredregions.replace('filter-','');
  sm(filteredregions);
  activateRegion(filteredregions);
};

let filteredRegions;

function regionEmitt(e) {
  filteredRegions = e.target.id;
  const regions = document.getElementById(filteredRegions);
  sm(filteredRegions);
  activateRegionInfo(filteredRegions);
  regions.removeEventListener('click',regionEmitt);
  return filteredRegions;
};

function activateRegion(filteredregions) {
  const regions = document.getElementById(filteredregions);
  regions.addEventListener('click',regionEmitt);
};

// DISPLAY REGION INFO

function activateRegionInfo(filteredregions) {
  document.getElementById('region-info').dataset.state = "active";
  displayRegionInfo();
  let closeRegionInfo = document.getElementById('close-region-info');
  closeRegionInfo.addEventListener('click',deactivateRegionInfo);
};

function deactivateRegionInfo() {
  sm(filteredRegions);
  let closeRegionInfo = document.getElementById('close-region-info');
  document.getElementById('settings-button').dataset.button = "enabled";
  document.getElementById('filter-button').dataset.button = "enabled";
  closeRegionInfo.removeEventListener('click',deactivateRegionInfo);
};

function displayRegionInfo() {
  let regionName = document.getElementById('region-name');
  let regionLocation = document.getElementById('region-location');
  let regionFunction = document.getElementById('region-function');
  regionName.textContent = regionData[0][filteredRegions]['name'];
  regionLocation.textContent = regionData[0][filteredRegions]['location'];
  regionFunction.textContent = regionData[0][filteredRegions]['function'];
  document.getElementById('settings-button').dataset.button = "disabled";
  document.getElementById('filter-button').dataset.button = "disabled";
};

// REGION INFO CARDS

const cardName = document.getElementById('card-name');
const cardLocation = document.getElementById('card-location');
const cardFunction = document.getElementById('card-function');

cardName.addEventListener('click',function() {
  cardName.classList.toggle('card-expand');
});

cardLocation.addEventListener('click',function() {
  cardLocation.classList.toggle('card-expand');
});

cardFunction.addEventListener('click',function() {
  cardFunction.classList.toggle('card-expand');
});

// REMOVE ONBOARDING ANIMATION FROM FILTER BUTTON

function removeOnboardingAnimation() {
  const f1 = document.getElementsByClassName('f1')[0];
  const f2 = document.getElementsByClassName('f2')[0];
  const f3 = document.getElementsByClassName('f3')[0];
  f1.setAttribute('id','animation-none');
  f2.setAttribute('id','animation-none');
  f3.setAttribute('id','animation-none');
};


//export { stateDisplay , updateStateInfo , updateState, oldState , newState , stateMachine };
export { settingsButton };