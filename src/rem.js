function refreshRem() {
  var docEl = doc.documentElement;
  var width = docEl.getBoundingClientRect().width;
  var rem = width / 10;
  docEl.style.fontSize = rem + 'px';
  flexible.rem = win.rem = rem;
}

window.addEventListener('resize', refreshRem);
