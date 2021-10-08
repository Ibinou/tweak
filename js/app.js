var $ = Dom7;


var app = new Framework7({
  name: 'Tweakstore', // App name
  theme: 'auto', // Automatic theme detection
  el: '#app', // App root element


  // App store
  store: store,
  // App routes
  routes: routes,
  // Register service worker
  serviceWorker: {
    path: '/service-worker.js',
  },
});