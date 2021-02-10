let spin = document.getElementById('settings-btn').addEventListener('click',function() {
  console.log('clicked me');
  document.getElementById('settings-icon').classList.add('spin');
})

export { spin };