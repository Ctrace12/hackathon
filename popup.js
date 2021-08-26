let button = document.querySelector('button');
let toggle = 'on';
button.addEventListener('click', (e) => {
  e.preventDefault();
  if (toggle === 'on') {
    console.log('toggled off');
    chrome.tabs.executeScript(null, { file: './toggleOff.js' });

    toggle = 'off';
  } else {
    console.log('toggled on');
    chrome.tabs.executeScript(null, { file: './toggleOn.js' });

    toggle = 'on';
  }
});
console.dir(document);
