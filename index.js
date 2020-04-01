/*jshint esversion: 6 */

buttons = document.querySelectorAll(".drum");
soundFiles = {
  w: "tom-1",
  'a': "tom-2",
  's': "tom-3",
  'd': "tom-4",
  'j': "snare",
  'k': "kick-bass",
  'l': "crash"
};

function playKey(key) {
  if (Object.keys(soundFiles).includes(key)) {
<<<<<<< HEAD
    try {
      var btn = document.querySelector("."+key);
      btn.classList.add("pressed");
      setTimeout(() => {  btn.classList.remove("pressed"); }, 100);
    } catch (e) {
      console.log("missing HTML button " + key);
    }
    try {
      f = "sounds/" + soundFiles[key] + ".mp3";
      new Audio(f).play();
    } catch (e) {
      console.log("missing audio file " + f);
    }
=======
    new Audio("sounds/" + soundFiles[key] + ".mp3").play();
>>>>>>> 3933767a812d3e293c37e7dbddfb1d4bfe354019
  }
}
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    playKey(this.innerHTML);
  });
}

document.addEventListener("keydown", function(event) {
  playKey(event.key);
});
