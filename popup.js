let button = document.querySelector('button');
let toggle;
button.addEventListener('click', (e) => {
  e.preventDefault();
  if (toggle === 'on') {
    console.log('toggled off');
    chrome.tabs.executeScript(null, { file: './toggleOff.js' });
    button.textContent = "let's go";
    toggle = 'off';
  } else {
    console.log('toggled on');
    chrome.tabs.executeScript(null, { file: './toggleOn.js' });
    button.textContent = 'shoo go away';
    toggle = 'on';
  }
});
console.dir(document);
