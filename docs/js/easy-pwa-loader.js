if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/js/easy-pwa-sw.js')
    .then(function(registration) {
      console.log(
        'Service Worker registration successful with scope: ',
        registration.scope
      );
    })
    .catch(function(err) {
      console.log('Service Worker registration failed: ', err);
    });
}