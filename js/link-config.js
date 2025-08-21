const baseTwitterURL = "https://twitter.com/8810bell"
const baseYouTubePath = "https://www.youtube.com/";
const channelYouTubePath = "@bell.8810";
const magnetYPath = "watch?v=ibkMVgGe9pA";
const saikyousingerYPath = "watch?v=3CQx9T2kzSs"

document.addEventListener("DOMContentLoaded", () => {
    const youtubeHome = document.querySelector(".youtube");
    const twitter = document.querySelector(".twitter");
    const magnetY = document.querySelector(".magnet")
    const saikyousingerY = document.querySelector(".saikyou");

    if(youtubeHome) youtubeHome.href = baseYouTubePath + channelYouTubePath;
    if(magnetY) magnetY.href = baseYouTubePath + magnetYPath;
    if(saikyousingerY) saikyousingerY.href = baseYouTubePath + saikyousingerYPath;
    if(twitter) twitter.href = twitter;
})
