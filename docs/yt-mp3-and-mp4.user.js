// ==UserScript==
// @name         Y0uTube MP3 and MP4 download
// @namespace    yt-mp3-or-mp4-download
// @version      0.1
// @description  Download mp3 and mp4 from YouTube video
// @author       PcMyOneLove
// @match       *://youtube.com/*
// @match       *://www.youtube.com/*
// @match       *://www.youtube-nocookie.com/*
// @match       *://tube.cadence.moe/*
// @match       *://yewtu.be/*
// @match       *://invidious.snopyta.org/*
// @match       *://invidious-jp.kavin.rocks    /*
// @grant        none
// ==/UserScript==

// TODO: Add check for change video (MutationObserver ?)

// - Settings

// Get id from url
var url = window.location.href; //const
var id = ytIdFromUrl(url); // let
var currentUrl = document.location.href;
var isPlaylist = currentUrl.includes("playlist");

console.info('YT url: ' + url);
console.info('YT id: ' + id);

// CSS Styles
// const cssStyles = `
// .savevideo-panel{width:auto;padding-left:12px;padding-right:12px;padding-top:10px;padding-bottom:16px;height:25px;outline:0;cursor:pointer;position:fixed;z-index:2147483647;transition:top .2s ease 0s;bottom:-2px;background:#fff;color:#fff;left:calc(100vw / 2 - 115px);border-top-left-radius:8px;border-top-right-radius:8px;border:2px dashed #000;margin:0 auto}.savevideo-panel>a{color:#666;background-color:#fff;padding:2px 5px;border:3px solid #000;text-decoration:none;text-transform:uppercase;display:inline-block;margin-right:0}.savevideo-panel>a:first-child{margin-right:-8px;border-top-left-radius:8px}.savevideo-panel>a:last-child{border-top-right-radius:8px}
// `;

locationChange();
//getPanel();


// --

var isCloudTube = (document.querySelector('.link.home') && document.querySelector('.link.home').textContent == 'CloudTube');
var isInvidious = (document.querySelector('.index-link.pure-menu-heading') && document.querySelector('.index-link.pure-menu-heading').textContent == 'Invidious');
//var isYouTube = (document.querySelector('#logo>a') && document.querySelector('#logo>a').title.indexOf('YouTube') > -1);
var isYouTube = document.location.href.indexOf('youtube') > -1;

// if(isCloudTube){

// }

// if(isInvidious){

// }

switch (true) { //url
	case isCloudTube:
		// button-container
		var buttonsArea = document.querySelector('.button-container');

		a = document.createElement('a');
		a.classList.add('border-look');
		a.href = '#!';
		a.textContent = '🎵 Download MP3';
		a.target = '_blank';
		a.onclick = function() { getMp3Btn(); };

		a2 = document.createElement('a');
		a2.classList.add('border-look');
		a2.href = '#!';
		a2.textContent = '🖼️ Download MP4';
		a2.target = '_blank';
		a2.onclick = function() { getMp4Btn(); };

		//<a class="border-look" href="https://www.youtube.com/watch?v=RBco9Flea0Y#cloudtube">Download MP3</a>

		buttonsArea.appendChild(a); buttonsArea.appendChild(a2);
	break;
	case isInvidious:
		// button-container
		var buttonsArea = document.querySelector('a#subscribe');

		a = document.createElement('a');
		a.classList.add('pure-button');
		a.classList.add('pure-button-primary');
		a.href = '#!';
		a.textContent = '🎵 Download MP3';
		a.target = '_blank';
		a.onclick = function() { getMp3Btn(); };
		a.style.marginLeft = '15px';
		a.style.lineHeight = '23px';

		a2 = document.createElement('a');
		a2.classList.add('pure-button');
		a2.classList.add('pure-button-primary');
		a2.href = '#!';
		a2.textContent = '🖼️ Download MP4';
		a2.target = '_blank';
		a2.onclick = function() { getMp4Btn(); };
		a2.style.marginLeft = '15px';
		a2.style.lineHeight = '23px';

		//<a id="subscribe" class="pure-button pure-button-primary" href="/login?referer=%2Fwatch%3Fv%3D31v3mvu4IHU" style="margin-left: 15px;"><b>Download MP3</b></a>

		insertAfter(a, buttonsArea); insertAfter(a2, buttonsArea);
	break;
	case isYouTube:
		// style-scope ytd-video-primary-info-renderer
		// button-container
		var buttonsArea = document.querySelector('div.style-scope.ytd-video-primary-info-renderer');
		//var isEmbed = document.querySelector('div.ytp-chrome-top-buttons');
		var isEmbed = !(document.querySelector('#logo>a') && document.querySelector('#logo>a').title.indexOf('YouTube') > -1);
		var a, a2, a3 = null;

		// if(!buttonsArea && !isEmbed){
		// 	//sleep(2000); // TODO: Отслеживать построение DOM дерева через MutationObserver ?
		// 	//isEmbed = document.querySelector('div.ytp-chrome-top-buttons');
		// }

		if(!buttonsArea && isEmbed){
			// Waiting embed player is ready
			var checkReady = setInterval(function() {

				buttonsArea = document.querySelector('div.ytp-chrome-top-buttons');

				if(buttonsArea){
					style = 'cursor: pointer; padding: 5px 10px; background-color: rgb(255 255 255 / 30%); border-radius: 4px; margin-right: 15px; font-size: 18px; line-height: 50px; border-top-left-radius: 0; border-top-right-radius: 0; color: rgb(255 255 255 / .8);';
					style_mini = 'font-size: 12px; line-height: 26px; word-break: break-word; height: 100%;';

					console.info('YouTube embed mode');

					a = document.createElement('a');
					a.classList.add('yt-mp3-download');
					a.classList.add('ytp-autohide');
					a.href = '#!';
					a.textContent = '🎵 Download MP3';
					a.target = '_blank';
					a.onclick = function() { getMp3Btn(); };
					a.style.marginLeft = '15px';
					a.style.cssText = style;
					if(document.body.offsetWidth < 900){
						a.style.cssText = a.style.cssText + style_mini;
					}

					a2 = document.createElement('a');
					a2.classList.add('yt-mp4-download');
					a2.classList.add('ytp-autohide');
					a2.href = '#!';
					a2.textContent = '🖼️ Download MP4';
					a2.target = '_blank';
					a2.onclick = function() { getMp4Btn(); };
					a2.style.marginLeft = '15px';
					a2.style.cssText = style;
					if(document.body.offsetWidth < 900){
						a2.style.cssText = a2.style.cssText + style_mini;
					}

					a3 = document.createElement('a');
					a3.classList.add('yt-cloudtube-download');
					a3.classList.add('ytp-autohide');
					a3.href = '#!';
					a3.textContent = '🚀 Open in CloudTube';
					a3.target = '_blank';
					a3.onclick = function() {
						const videoTab = window.open('https://tube.cadence.moe/watch?v=' + id, '_blank');
		    			videoTab.focus();
					};
					a3.style.marginLeft = '15px';
					a3.style.cssText = style;
					if(document.body.offsetWidth < 900){
						a3.style.cssText = a3.style.cssText + style_mini;
					}

					//insertAfter(a, buttonsArea); insertAfter(a2, buttonsArea); insertAfter(a3, buttonsArea);
					buttonsArea.appendChild(a); buttonsArea.appendChild(a2); buttonsArea.appendChild(a3);

					clearInterval(checkReady);
				}
			}, 1000);
		}

		if(buttonsArea){
			a = document.createElement('a');
			a.classList.add('yt-mp3-download');
			a.href = '#!';
			a.textContent = '🎵 Download MP3';
			a.target = '_blank';
			a.onclick = function() { getMp3Btn(); };
			a.style.marginLeft = '15px';
			a.style.cssText = 'padding: 5px 10px; color: #181818; background-color: white; border-radius: 4px; margin-right: 15px; font-size: 18px;';

			a2 = document.createElement('a');
			a2.classList.add('yt-mp4-download');
			a2.href = '#!';
			a2.textContent = '🖼️ Download MP4';
			a2.target = '_blank';
			a2.onclick = function() { getMp4Btn(); };
			a2.style.marginLeft = '15px';
			a2.style.cssText = 'padding: 5px 10px; color: #181818; background-color: white; border-radius: 4px; margin-right: 15px; font-size: 18px;';

			a3 = document.createElement('a');
			a3.classList.add('yt-cloudtube-download');
			a3.href = '#!';
			a3.textContent = '🚀 Open in CloudTube';
			a3.target = '_blank';
			a3.onclick = function() { document.location.href = 'https://tube.cadence.moe/watch?v=' + id; };
			a3.style.marginLeft = '15px';
			a3.style.cssText = 'padding: 5px 10px; color: #181818; background-color: white; border-radius: 4px; margin-right: 15px; font-size: 18px;';

			insertAfter(a, buttonsArea); insertAfter(a2, buttonsArea); insertAfter(a3, buttonsArea);
		} else if(isEmbed){
			// style = 'padding: 5px 10px; background-color: rgb(255 255 255 / 30%); border-radius: 4px; margin-right: 15px; font-size: 18px; line-height: 50px; border-top-left-radius: 0; border-top-right-radius: 0; color: rgb(255 255 255 / .8);';
			// style_mini = 'font-size: 12px; line-height: 26px; word-break: break-word; height: 100%;';

			// console.info('YouTube embed mode');

			// a = document.createElement('a');
			// a.classList.add('yt-mp3-download');
			// a.href = '#!';
			// a.textContent = '🎵 Download MP3';
			// a.target = '_blank';
			// a.onclick = function() { getMp3Btn(); };
			// a.style.marginLeft = '15px';
			// a.style.cssText = style;
			// if(document.body.offsetWidth < 900){
			// 	a.style.cssText = a.style.cssText + style_mini;
			// }

			// a2 = document.createElement('a');
			// a2.classList.add('yt-mp4-download');
			// a2.href = '#!';
			// a2.textContent = '🖼️ Download MP4';
			// a2.target = '_blank';
			// a2.onclick = function() { getMp4Btn(); };
			// a2.style.marginLeft = '15px';
			// a2.style.cssText = style;
			// if(document.body.offsetWidth < 900){
			// 	a2.style.cssText = a2.style.cssText + style_mini;
			// }

			// a3 = document.createElement('a');
			// a3.classList.add('yt-cloudtube-download');
			// a3.href = '#!';
			// a3.textContent = '🚀 Open in CloudTube';
			// a3.target = '_blank';
			// a3.onclick = function() {
			// 	const videoTab = window.open('https://tube.cadence.moe/watch?v=' + id, '_blank');
   //  			videoTab.focus();
			// };
			// a3.style.marginLeft = '15px';
			// a3.style.cssText = style;
			// if(document.body.offsetWidth < 900){
			// 	a3.style.cssText = a3.style.cssText + style_mini;
			// }

			//buttonsArea = null; //isEmbed

			// const buttons = document.createElement('div');
			// buttons.style.cssText = 'position: absolute; bottom: 0; left: 0; width: 100%; height: 100px;';
			// buttons.appendChild(a);
			// buttons.appendChild(a2);
			// buttons.appendChild(a3);
			// document.body.appendChild(buttons);
		}

		// TODO: Добавить кнопки в embed плеер YouTube

		//<a id="subscribe" class="pure-button pure-button-primary" href="/login?referer=%2Fwatch%3Fv%3D31v3mvu4IHU" style="margin-left: 15px;"><b>Download MP3</b></a>

		//insertAfter(a, buttonsArea); insertAfter(a2, buttonsArea); insertAfter(a3, buttonsArea);
	break;
}

// - Helpers

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

// function getPanel(){
//     const wrap = document.createElement('div');
//     wrap.classList.add('savevideo-panel');
//     wrap.innerHTML = `
//     <a id="get-mp3" href="#!">Скачать <b>mp3</b></a>
//     <a id="get-mp4" href="#!">Скачать <b>видео</b></a>
// `;
//     document.body.appendChild(wrap);

//     document.getElementById('get-mp3').onclick = function() {
//         getMp3Btn();
//     };

//     document.getElementById('get-mp4').onclick = function() {
//         getMp4Btn();
//     };

//     const styles = document.createElement('style');
//     styles.innerHTML = cssStyles;
//     document.head.appendChild(styles);
// }

// Detect video change
function locationChange() {
    if ("MutationObserver" in window) {
        const observer = new MutationObserver(mutations => {
            mutations.forEach(() => {
                if (url !== document.location.href) {
                    currentUrl = document.location.href;
                    isPlaylist = url.includes("playlist");
                    id = ytIdFromUrl(url);
                    console.info('Video is changed: ' + id);

                    //init(10);
                }
            });
        });
        const target = document.body;
        const config = { childList: true, subtree: true };
        observer.observe(target, config);
    } else {
        if (window.location.href.indexOf("watch?v=") > -1 || document.getElementById("browser-app") || document.getElementById("masthead") || window.Polymer) {
            setInterval(function() {
                if (window.location.href.indexOf("watch?v=") > -1) {
                    currentUrl = document.location.href;
                    isPlaylist = url.includes("playlist");
                    id = ytIdFromUrl(url);
                }
            }, 1000);
        }
    }
}

// Get Youtube ID from url
function ytIdFromUrl(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

// get mp3 btn
function getMp3Btn() {
    const watchPage = `https://pcmyonelove.github.io/ytbtn2-mp3.html?v6#${id}`;
    const filmTab = window.open(watchPage, '_blank');
    filmTab.focus();
}

// get mp4 btn
function getMp4Btn() {
    const watchPage = `https://pcmyonelove.github.io/ytbtn2-videos.html?v6#${id}`;
    const filmTab = window.open(watchPage, '_blank');
    filmTab.focus();
}