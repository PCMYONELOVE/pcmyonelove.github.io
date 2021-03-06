// ==UserScript==
// @name         Y0uTube MP3 or MP4 download
// @namespace    yt-mp3-video-download
// @version      0.2
// @description  Download mp3 or mp4 from YouTube video
// @author       PcMyOneLove
// @match       *://youtube.com/*
// @match       *://www.youtube.com/*
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
const cssStyles = `
.savevideo-panel{width:auto;padding-left:12px;padding-right:12px;padding-top:10px;padding-bottom:16px;height:25px;outline:0;cursor:pointer;position:fixed;z-index:2147483647;transition:top .2s ease 0s;bottom:-2px;background:#fff;color:#fff;left:calc(100vw / 2 - 115px);border-top-left-radius:8px;border-top-right-radius:8px;border:2px dashed #000;margin:0 auto}.savevideo-panel>a{color:#666;background-color:#fff;padding:2px 5px;border:3px solid #000;text-decoration:none;text-transform:uppercase;display:inline-block;margin-right:0}.savevideo-panel>a:first-child{margin-right:-8px;border-top-left-radius:8px}.savevideo-panel>a:last-child{border-top-right-radius:8px}
`;

locationChange();
getPanel();


// - Helpers

function getPanel(){
    const wrap = document.createElement('div');
    wrap.classList.add('savevideo-panel');
    wrap.innerHTML = `
    <a id="get-mp3" href="#!">Скачать <b>mp3</b></a>
    <a id="get-mp4" href="#!">Скачать <b>видео</b></a>
`;
    document.body.appendChild(wrap);

    document.getElementById('get-mp3').onclick = function() {
        getMp3Btn();
    };

    document.getElementById('get-mp4').onclick = function() {
        getMp4Btn();
    };

    const styles = document.createElement('style');
    styles.innerHTML = cssStyles;
    document.head.appendChild(styles);
}

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