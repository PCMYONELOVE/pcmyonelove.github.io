// ==UserScript==
// @name         Y0uTube MP3 or MP4 download
// @namespace    yt-mp3-video-download
// @version      0.1
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

// - Settings

// Get id from url
const url = window.location.href;
let id = ytIdFromUrl(url);

console.info('YT url: ' + url);
console.info('YT id: ' + id);

// CSS Styles
const cssStyles = `
.savevideo-panel{width:auto;padding-left:12px;padding-right:12px;padding-top:10px;padding-bottom:16px;height:25px;outline:0;cursor:pointer;position:fixed;z-index:2147483647;transition:top .2s ease 0s;bottom:-2px;background:#fff;color:#fff;left:calc(100vw / 2 - 115px);border-top-left-radius:8px;border-top-right-radius:8px;border:2px dashed #000;margin:0 auto}.savevideo-panel>a{color:#666;background-color:#fff;padding:2px 5px;border:3px solid #000;text-decoration:none;text-transform:uppercase;display:inline-block;margin-right:0}.savevideo-panel>a:first-child{margin-right:-8px;border-top-left-radius:8px}.savevideo-panel>a:last-child{border-top-right-radius:8px}
`;

// Show panelWrap
if (url.indexOf('view')) {

    const wrap = document.createElement('div');
    wrap.class = 'savevideo-panel';
    wrap.innerHTML = `
    <a href="#!" onclick="window.getMp3Btn()">Скачать <b>mp3</b></a>
    <a href="#!" onclick="window.getMp4Btn()">Скачать <b>видео</b></a>
`;
    document.body.appendChild(wrap);

    const styles = document.createElement('style');
    styles.innerHTML = cssStyles;
    document.head.appendChild(styles);

}

// - Helpers

// Get Youtube ID from url
function ytIdFromUrl(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

// get mp3 btn
window.getMp3Btn = function() {
    const watchPage = `https://pcmyonelove.github.io/ytbtn2-mp3.html?v6#${id}`;
    const filmTab = window.open(watchPage, '_blank');
    filmTab.focus();
}

// get mp4 btn
window.getMp4Btn = function() {
    const watchPage = `https://pcmyonelove.github.io/ytbtn2-videos.html?v6#${id}`;
    const filmTab = window.open(watchPage, '_blank');
    filmTab.focus();
}