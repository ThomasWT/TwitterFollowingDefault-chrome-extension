var btn = undefined;

//wait for btn to exist
var lookForBtn = setInterval(() => {
  btn = document.querySelectorAll("[role=tablist] > div:nth-child(2) a")[0];
  if (btn) {
    clearInterval(lookForBtn);
    btn.click(); //click on "Following"
  }
}, 100);