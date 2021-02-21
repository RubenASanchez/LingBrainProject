let currentState = document.getElementById('current-state')

let activateSettings = document.getElementById('settings-button').addEventListener('click',function() {
  console.log('clicked settings');
  document.getElementsByClassName('settings-icon')[0].classList.add('settings-active');
  currentState.textContent = "settings";
  console.log('settings active');
  document.getElementsByClassName('brain')[0].classList.add('brain-section-hide');
  console.log('brain section hide');
})


export { activateSettings };