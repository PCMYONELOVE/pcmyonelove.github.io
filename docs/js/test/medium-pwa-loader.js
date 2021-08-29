if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
	navigator.serviceWorker.register('/medium-pwa-sw.js')
	.then(function(registration) { console.log('PWA service worker ready'); registration.update(); })
	.catch(function(error) { console.log('Registration failed with ' + error); });


	// var deferredPrompt;
	// window.addEventListener('beforeinstallprompt', function(e){
	// 	deferredPrompt = e;
	// 	if(deferredPrompt != null || deferredPrompt != undefined){
	// 		if(pwa_sw.disable_addtohome==1){
	// 			deferredPrompt.preventDefault();
	// 		}
	// 	}
	// })

	// Service Worker должен находится в корне сайта!!!

	window.addEventListener('appinstalled', function(evt){
		// alert('Приложение установлено');
		console.log('App is installed');
	});

  });
}
