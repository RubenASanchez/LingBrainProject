const counts = {
  installs: 0,
  activations: 0,
  fetches: 0
};

self.addEventListener('install',() => {
  console.log('installing sw',++counts.installs);
});

self.addEventListener('activate',() => {
  console.log('activating sw',++counts.activations);
});

self.addEventListener('fetch',() => {
  console.log('fetching sw',++counts.fetches);
});