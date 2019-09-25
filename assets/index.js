import MediaPlayer from "./mediaPlayer.js"
import AutoPlay from "./plugins/autoPlay.js"
import AutoPause from "./plugins/autoPause.js"

const video = document.querySelector("video")
const button = document.querySelector("button")
const buttonMute = document.getElementById("buttonMute")

const player = new MediaPlayer({ 
  el: video,
  plugins: [ new AutoPlay(), new AutoPause() ],
});

button.onclick = () => player.togglePlay();
buttonMute.onclick= () => player.toogleMute();

if("serviceWorker" in navigator){
  navigator.serviceWorker.register("/sw.js").catch(error => {
    console.log(error.message);
  });
}