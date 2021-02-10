let spin = document.getElementById('settings-button').addEventListener('click',function() {
  console.log('clicked me');
  document.getElementById('settings-icon').classList.add('spin');
})

export { spin };