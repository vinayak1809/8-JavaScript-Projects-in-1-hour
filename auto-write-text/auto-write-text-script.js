const text = "Better a diamond with a flaw than a pebble without!";
let index = 0;

function call() {
  document.body.innerText = text.slice(0, index);
  index++;
  if (index > text.length) {
    index = 0;
  }
}

setInterval(call, 100);
