if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/easy-pwa-sw.js')
    .then(function(registration) {
      console.log(
        'Service Worker registration successful with scope: ',
        registration.scope
      );
      // Можно вывести сообщение о том что что приложение установлено
      // Eventы: appinstalled, beforeinstallprompt
    })
    .catch(function(err) {
      console.log('Service Worker registration failed: ', err);
    });
}