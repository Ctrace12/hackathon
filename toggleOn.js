document.body.addEventListener('click', () => {
  obj.leftClick.play();
});
document.body.addEventListener('keydown', (event) => {
  if (event.code === 'Tab') {
    let currentText = selection();
    for (let i = currentText.anchorOffset; i < currentText.focusOffset; i++) {
      const characterSound =
        obj[currentText.focusNode.nodeValue[i].toLowerCase()];
      console.log(currentText.focusNode.nodeValue[i]);
      if (currentText.focusNode.nodeValue[i] === ' ') {
        continue;
      } else if (characterSound) {
        setTimeout(
          () => characterSound.play(),
          (i - currentText.anchorOffset) * 400
        );
      } else {
        setTimeout(
          () => obj.backSpace.play(),
          (i - currentText.anchorOffset) * 400 - 400
        );
      }
    }
  }
});
document.body.addEventListener('contextmenu', () => obj.rightClick.play());
document.body.addEventListener('keydown', (event) => {
  switch (event.code) {
    case 'KeyA':
      obj.a.play();
      break;
    case 'KeyB':
      obj.b.play();
      break;
    case 'KeyC':
      obj.c.play();
      break;
    case 'KeyD':
      obj.d.play();
      break;
    case 'KeyE':
      obj.e.play();
      break;
    case 'KeyF':
      obj.f.play();
      break;
    case 'KeyG':
      obj.g.play();
      break;
    case 'KeyH':
      obj.h.play();
      break;
    case 'KeyI':
      obj.i.play();
      break;
    case 'KeyJ':
      obj.j.play();
      break;
    case 'KeyK':
      obj.k.play();
      break;
    case 'KeyL':
      obj.l.play();
      break;
    case 'KeyM':
      obj.m.play();
      break;
    case 'KeyN':
      obj.n.play();
      break;
    case 'KeyO':
      obj.o.play();
      break;
    case 'KeyP':
      obj.p.play();
      break;
    case 'KeyQ':
      obj.q.play();
      break;
    case 'KeyR':
      obj.r.play();
      break;
    case 'KeyS':
      obj.s.play();
      break;
    case 'KeyT':
      obj.t.play();
      break;
    case 'KeyU':
      obj.u.play();
      break;
    case 'KeyV':
      obj.v.play();
      break;
    case 'KeyW':
      obj.w.play();
      break;
    case 'KeyX':
      obj.x.play();
      break;
    case 'KeyY':
      obj.y.play();
      break;
    case 'KeyZ':
      obj.z.play();
      break;
    case 'Space':
      obj.space.play();
      break;
    case 'Backspace':
      obj.backSpace.play();
      break;
  }
});
kanyeQuoteGenerator();
