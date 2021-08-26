//   const bodyYoutube = document.querySelector('#content');
console.log('ran');

//add event listener to keyboard on document on document.body?
document.body.addEventListener('click', () => obj.leftClick.play());
document.body.addEventListener('contextmenu', () => obj.rightClick.play());
document.body.addEventListener('keydown', (event) => {
  switch (event.code) {
    case 'KeyA':
      obj.a.play(); //aAudio.play()
      break;
    case 'KeyB':
      obj.b.play(); //bAudio.play()
      break;
    case 'KeyC':
      obj.c.play(); //cAudio.play();
      break;
    case 'KeyD':
      obj.d.play(); //dAudio.play();
      break;
    case 'KeyE':
      obj.e.play(); //eAudio.play();
      break;
    case 'KeyF':
      obj.f.play(); //fAudio.play();
      break;
    case 'KeyG':
      obj.g.play(); //gAudio.play();
      break;
    case 'KeyH':
      obj.h.play(); //hAudio.play();
      break;
    case 'KeyI':
      obj.i.play(); //iAudio.play();
      break;
    case 'KeyJ':
      obj.j.play(); //jAudio.play();
      break;
    case 'KeyK':
      obj.k.play(); //kAudio.play();
      break;
    case 'KeyL':
      obj.l.play(); //lAudio.play();
      // obj[l].play();
      break;
    case 'KeyM':
      obj.m.play(); //mAudio.play();
      break;
    case 'KeyN':
      obj.n.play(); //nAudio.play();
      break;
    case 'KeyO':
      obj.o.play(); //oAudio.play();
      break;
    case 'KeyP':
      obj.p.play(); //pAudio.play();
      break;
    case 'KeyQ':
      obj.q.play(); //qAudio.play();
      break;
    case 'KeyR':
      obj.r.play(); //rAudio.play();
      break;
    case 'KeyS':
      obj.s.play(); //sAudio.play();
      break;
    case 'KeyT':
      obj.t.play(); //tAudio.play();
      break;
    case 'KeyU':
      obj.u.play(); //uAudio.play();
      break;
    case 'KeyV':
      obj.v.play(); //vAudio.play();
      break;
    case 'KeyW':
      obj.w.play(); //wAudio.play();
      break;
    case 'KeyX':
      obj.x.play(); //xAudio.play();
      break;
    case 'KeyY':
      obj.y.play(); //
      break;
    case 'KeyZ':
      obj.z.play(); //zAudio.play();
      break;
    case 'Space':
      obj.space.play(); //spaceAudio.play();
      break;
    case 'Backspace':
      obj.backSpace.play();
      break;
  }
});
// let testAudio1 = new Audio(`hackathon/assets/oof-1.m4a`);
// console.log(testAudio1);
// testAudio1.crossOrigin = 'anonymous';
// testAudio1.mediaPlayer = 'audioPlayer'
// testAudio1.
// /* <audio media-player="audioPlayer" autoplay controls="controls" preload="auto" id="audioElement" */}
//                 // crossOrigin="anonymous" src="{{audio}}"></audio>
let letterArr = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  'leftClick',
  'rightClick',
  'space',
];
let obj = {}; // i was thinking about this, there is no reason to repeat everything over and over
//yeah i realized that, i think you have to make letter arr tho...
for (let i = 0; i < letterArr.length; i++) {
  obj[letterArr[i]] = new Audio();
  obj[letterArr[i]].src = chrome.extension.getURL(
    `assets/${letterArr[i]}Audio.mp3`
  );
}
obj.backSpace = new Audio();
obj.backSpace.src = chrome.extension.getURL('assets/backSpaceAudio.m4a');
let myAudio = new Audio(); //chrome.runtime.getURL('hackathon/assets/oof-1.m4a'));
myAudio.src = chrome.extension.getURL('assets/oof-1.m4a');
let myAudio2 = new Audio();
myAudio2.src = chrome.extension.getURL('assets/oof-2.m4a');

window.onload(() => {
  const imgArr = document.getElementsByTagName('img');
  for (let i = 0; i < imgArr.length; i++) {
    imgArr[i].src = chrome.extension.getURL('assets/ryan.png');
  }
});
