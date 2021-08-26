let button = document.createElement('button');
document.body.appendChild(button);
if (localStorage.toggle === 'on') {
  button.textContent = 'shoo go away';
} else {
  button.textContent = "let's go";
}
button.addEventListener('click', (e) => {
  e.preventDefault();
  if (localStorage.toggle === 'on') {
    console.log('toggled off');
    chrome.tabs.executeScript(null, { file: './toggleOff.js' });
    button.textContent = "let's go";
    localStorage.toggle = 'off';
  } else {
    console.log('toggled on');
    chrome.tabs.executeScript(null, { file: './toggleOn.js' });
    button.textContent = 'shoo go away';
    localStorage.toggle = 'on';
  }
});
console.dir(document);
