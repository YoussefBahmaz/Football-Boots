
let picture = document.getElementById("picture");
let fbootRed = document.getElementById("fbootRed");
let fbootGreen = document.getElementById("fbootGreen");
let fbootGray = document.getElementById("fbootGray");
let fbootBlack = document.getElementById("fbootBlack");

fbootRed.onclick = function(){
    picture.src = fbootRed.src;
    document.body.style.backgroundColor = "#eb0000";
    document.body.style.transition = "all linear 200ms";
    picture.style.transform = "rotateY(0deg)";
}
fbootGreen.onclick = function(){
    picture.src = fbootGreen.src;
    document.body.style.backgroundColor = "#00c000";
    document.body.style.transition = "all linear 200ms";
    picture.style.transform = "rotateY(180deg)";
}
fbootGray.onclick = function(){
    picture.src = fbootGray.src;
    document.body.style.backgroundColor = "#9f9f9f";
    document.body.style.transition = "all linear 200ms";
    picture.style.transform = "rotateY(0deg)";
}
fbootBlack.onclick = function(){
    picture.src = fbootBlack.src;
    document.body.style.backgroundColor = "#312c2c";
    document.body.style.transition = "all linear 200ms";
    picture.style.transform = "rotateY(180deg)";
}