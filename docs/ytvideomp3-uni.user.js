// ==UserScript==
// @name         YT MP3 Download
// @namespace    yt-mp3-download
// @version      0.5
// @description  Download mp3 from YouTube video
// @author       PcMyOneLove
// @match       *://youtube.com/*
// @match       *://www.youtube.com/*
// @match       *://tube.cadence.moe/*
// @match       *://yewtu.be/*
// @match       *://invidious.snopyta.org/*
// @match       *://invidious-jp.kavin.rocks    /*
// @grant        none
// ==/UserScript==

// Image of the banner
const myStyles__styles = `
.savevideo-panel{
    width: auto;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 10px;
    padding-bottom: 16px;
    height: 25px;
    outline: none;
    cursor: pointer;
    position: fixed;
    z-index: 2147483647;
    transition: top 0.2s ease 0s;
    bottom: -2px;
    /* padding: 10px 2px; */
    background: white;
    color: white;
    left: calc(100vw / 2 - 115px);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border: 2px dashed black;
    margin: 0 auto;
}

.savevideo-panel > a{
    color: #666;
    background-color: white;
    padding: 2px 5px;
    border: 3px solid black;
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    margin-right: 0px;
}

.savevideo-panel > a:first-child{
  margin-right: -8px;
  border-top-left-radius: 8px;
}

.savevideo-panel > a:last-child{
  border-top-right-radius: 8px;
}
`;

// Get id from url
const url = window.location.href;
var id = ytIdFromUrl(url);

console.info('YT url: ' + url);
console.info('YT id: ' + id);

// Show panelWrap
if (url.indexOf('view')) {

    // Create panelWrap element
    const panelWrap = document.createElement('div');
    //panelWrap.innerHTML = bannerCode;

    const panel = panelWrap.createElement('div');
    panel.class = 'savevideo-panel';

    var link1 = panel.createElement('a');
    link1.innerHTML = 'Скачать <b>mp3</b>';
    link1.href = '#!';

    var link2 = panel.createElement('a');
    link2.innerHTML = 'Скачать <b>видео</b>';
    link2.href = '#!';

    // Show panelWrap after timeout
    setTimeout(() => {
        link1.onclick = getMp3Btn;
        link2.onclick = getVideoBtn;
        //banner.onmouseover = () => {banner.style.top = '0px'};
        //banner.onmouseout = () => {banner.style.top = '-32px'};
    }, 1000);

    // Add panelWrap to the page
    document.body.appendChild(panelWrap);

    // Add custom css
    const myStyles = document.createElement('style');
    myStyles.innerHTML = myStyles__styles;
    document.head.appendChild(myStyles);
}

// Get Youtube ID from url
function ytIdFromUrl(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

// get mp3 btn
function getMp3Btn() {
    const watchPage = `https://pcmyonelove.github.io/ytbtn2-mp3.html?v5#${id}`;
    const filmTab = window.open(watchPage, '_blank');
    filmTab.focus();
}

// get video btn
function getVideoBtn() {
    const watchPage = `https://pcmyonelove.github.io/ytbtn2-videos.html?v5#${id}`;
    const filmTab = window.open(watchPage, '_blank');
    filmTab.focus();
}