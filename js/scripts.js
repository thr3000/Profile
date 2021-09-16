function copy() {
    navigator.clipboard.writeText("fengb702@gmail.com");
    alert("Copied the text: fengb702@gmail.com");
}

var path = window.location.pathname;
if (path.includes("index")) {
    document.getElementById("index").style.color = "white";
}
else if (path.includes("about")) {
    document.getElementById("about").style.color = "white";
}
else if (path.includes("projects")) {
    document.getElementById("project").style.color = "white";
}
else if (path.includes("contact")) {
    document.getElementById("contact").style.color = "white";
}

window.addEventListener('resize', reportWindowSize);
function reportWindowSize(){
    var w = window.innerWidth;
    var h = window.innerHeight;
    console.log("width: " + w);
    console.log("height: " + h);
}


