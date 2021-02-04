if('serviceWorker' in navigator) {
  console.log('browser can use sw');
  navigator.serviceWorker.register('sw.js').then(registration => {
    console.log('registered sw',registration);
  })
  .catch(error => {
    console.log('boo error',error);
  });
}
