// function audio

// audio
// function audioContext() {
//   if (typeof window.AudioContext !== "undefined") {
//     console.log("AudioContext");
//     return new window.AudioContext();
//   } else if (typeof webkitAudioContext !== "undefined") {
//     console.log("webkitAudioContext");
//     return new window.webkitAudioContext();
//   } else if (typeof window.mozAudioContext !== "undefined") {
//     console.log("mozAudioContext");
//     return new window.mozAudioContext();
//   } else {
//     console.log("NONE OF THEM!");
//   }
// }

// var context;
// window.addEventListener("load", init, false);
// function init() {
//   try {
//     // Fix up for prefixing
//     window.AudioContext = window.AudioContext || window.webkitAudioContext;
//     context = new AudioContext();
//   } catch (e) {
//     alert("Web Audio API is not supported in this browser");
//   }
// }

// 新的api是通过navigator.mediaDevices.getUserMedia，且返回一个promise。

// 而旧的api是navigator.getUserMedia，

//  兼容老浏览器
if (navigator.mediaDevices === undefined) {
  navigator.mediaDevices = {};
}

if (navigator.mediaDevices.getUserMedia === undefined) {
  let getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;

  navigator.mediaDevices.getUserMedia = function (contraints) {
    // if (!get)
  };
}
