function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    }
    let buti = document.querySelector("#canvas-button");
    function canvas_fun() {
    let number = Number(document.querySelector('#count').value);
    let art = document.querySelector("#canvas");
    
    let stylish = art.getContext("2d");
    stylish.clearRect(0, 0, canvas.width, canvas.height);
    stylish.fillStyle = "rgb(140, 105, 163)";
    let k = 0;
    let i=0;
    
    while(i!=number){
    stylish.fillRect(k, 500, 5, getRandomInt(-150, -400));
    
    i++;
    k+=6;
    }
}
buti.addEventListener("click", canvas_fun);