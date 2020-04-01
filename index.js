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
    new Audio("sounds/" + soundFiles[key] + ".mp3").play();
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
