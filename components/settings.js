let spin = document.getElementById('settings-button').addEventListener('click',function() {
  console.log('clicked me');
  document.getElementsByClassName('settings-icon')[0].classList.add('settings-active');
  console.log('added colour and rotation');
})

export { spin };