let currentState = document.getElementById('current-state');
let settingsButton = document.getElementById('settings-button');
let settingsIcon = document.getElementsByClassName('settings-icon')[0];
let settingsSection = document.getElementsByClassName('settings-section')[0];
let previousStateText = currentState.textContent;

let activateSettings = settingsButton.addEventListener('click',function() {
  if (currentState.textContent === "settings") {
    settingsIcon.classList.add('settings-inactive');
    settingsIcon.classList.remove('settings-active');
    settingsIcon.addEventListener('animationend',() => {
      settingsIcon.classList.remove('settings-inactive');
    });
    currentState.textContent = previousStateText;
    showPreviousElement();
    //console.log('settings inactive');
  }
  else {
    //console.log('clicked settings');
    settingsIcon.classList.add('settings-active');
    currentState.textContent = "settings";
    hideAllElements();
    settingsSection.classList.remove('section-hide');
  }
});

// toggle functions

let toggleAnimation = document.getElementById('toggle-animation');
let toggleButtonAnimation = document.getElementById('toggle-button-animation');
let toggleTheme = document.getElementById('toggle-theme');
let toggleButtonTheme = document.getElementById('toggle-button-theme')

let activateAnimation = toggleAnimation.addEventListener('click',function() {
  if (toggleButtonAnimation.classList.contains('toggle-active')) {
    // console.log('toggle already active');
    toggleButtonAnimation.classList.remove('toggle-active');
  }
  else {
    toggleButtonAnimation.classList.add('toggle-active');
  }
});

let activateTheme = toggleTheme.addEventListener('click',function() {
  if (toggleButtonTheme.classList.contains('toggle-active')) {
    //console.log('toggle already active');
    toggleButtonTheme.classList.remove('toggle-active');
  }
  else {
    toggleButtonTheme.classList.add('toggle-active');
  }
});

// state management

if (currentState.textContent === "settings") {
  console.log(`settings active ${currentState}`);
}
else {
  console.log(`settings not active ${currentState}`);
}



// change function to add class hide-element to all elements that are not settings
// so far it only targets the given element
// may want to make one function to handle both hide and show elements

function hideAllElements() {
  document.getElementsByClassName('brain')[0].classList.add('section-hide');
  //console.log('hide all non settings elements');
}

function showPreviousElement() {
  document.getElementsByClassName('brain')[0].classList.remove('section-hide');
  settingsSection.classList.add('section-hide');
}

export { activateSettings };
