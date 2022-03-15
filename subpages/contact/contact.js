//adjust playing speed of background
document.getElementById("overlayVideo").playbackRate = 0.6;

//toggle show email
var showEmail = false;

document.getElementById("urlTabEmail").onclick = function () {
  if (showEmail == false) {
    showEmail = true;
    document.getElementById("urlTabEmail").innerHTML = "hide e-mail";
    document.getElementById("urlTabEmailResponseContent").style.width = "175px";
    document.getElementById("urlTabEmailResponseContent").style.height =
      "27.5px";
    document.getElementById("urlTabEmailResponseContent").innerHTML =
      "jonaumusic@gmail.com";
  } else {
    showEmail = false;
    document.getElementById("urlTabEmail").innerHTML = "show e-mail";
    document.getElementById("urlTabEmailResponseContent").style.width = "0px";
    document.getElementById("urlTabEmailResponseContent").style.height = "0px";
    document.getElementById("urlTabEmailResponseContent").innerHTML = null;
  }
};

document.getElementById("urlTabEmailResponse").onclick = function () {
  if (showEmail == true) {
    window.location.href = "mailto:jonaumusic@gmail.com";
  }
};

//go back to index
document.getElementById("urlTabGoBack").onclick = function () {
  window.open("/index.html", "_self");
};
