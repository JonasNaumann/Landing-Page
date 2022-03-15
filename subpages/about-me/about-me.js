//adjust playing speed of background
document.getElementById("overlayVideo").playbackRate = 0.6;

//go back to index
document.getElementById("urlTabGoBack").onclick = function () {
  window.open("/index.html", "_self");
};
