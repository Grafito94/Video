console.log("page loaded...");

var x = document.getElementById("video1");
function playVid(){
    x.play();
    x.muted = true;
}

function pauseVid(){
    x.pause();
}