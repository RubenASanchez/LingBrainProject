let activateSettings = document.getElementById('settings-button').addEventListener('click',function() {
  console.log('clicked settings');
  document.getElementsByClassName('settings-icon')[0].classList.add('settings-active');
  console.log('added settings active');
  document.getElementById('current-state').textContent = "settings";
  console.log('added settings state')
})

export { activateSettings };
 