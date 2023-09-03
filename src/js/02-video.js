import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

player.on(
  `timeupdate`,
  throttle(function (data) {
    const currentTime = data.seconds;
    localStorage.setItem(`lastTime`, currentTime);
  }, 1000)
);

const lastTime = localStorage.getItem(`lastTime`);
if(lastTime){
  player.setCurrentTime(lastTime)
}

// function saveTime(data) {
//   const { seconds } = data;
//   localStorage.setItem('videoplayer-current-time', seconds);
//   return seconds;
// }

// function setTime() {
//   const currentTime = JSON.parse(
//     localStorage.getItem('videoplayer-current-time')
//   );
//   player.setCurrentTime(currentTime);
// }
// player.on('timeupdate', throttle(saveTime, 1000, { leading: false }));
// window.addEventListener('load', setTime, { once: true });
