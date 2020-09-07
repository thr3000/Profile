function jump(val) {
  if (val == 1) {
    window.location.href = "about.html";
  }
  else if (val == 2) {
    window.location.href = "project.html";
  }
  else if (val == 3) {
    window.location.href = "contact.html";
  }
  else if (val == 4){
    window.location.href = "course.html";
  }
  else {
    window.location.href = "index.html";
  }
}

var mushroom = document.getElementById("mushroom");
var happy = document.getElementById("happy");
var height = window.innerHeight - mushroom.clientHeight;
var width = window.innerWidth - mushroom.clientWidth;
var score = 0;
var clicked = false;

function startGame() {
  setInterval(move, 2500);
  var score = 0;
}

function move() {
  var randomHeight = Math.round(Math.random() * height);
  var randomWidth = Math.round(Math.random() * width);
  mushroom.style.visibility = "visible";
  happy.style.visibility = "hidden";
  mushroom.style.top = randomHeight + "px";
  mushroom.style.left = randomWidth + "px";
  happy.style.top = randomHeight + "px";
  happy.style.left = randomWidth + "px";
  clicked = false;
}

function scored() {
  if (!clicked) {
    score++;
    document.getElementById("score").innerHTML = "Score: " + score;
    mushroom.style.visibility = "hidden";
    happy.style.visibility = "visible";
  }
  clicked = true;
}
