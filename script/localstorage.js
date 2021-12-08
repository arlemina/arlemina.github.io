let colorbutton = document.querySelector("#color-button");
let div = document.querySelector("#div-for-local")

colorbutton.onclick=function(){
    if(div.style.background == "rgb(140, 105, 163)")
    {
        div.style.background = "black";
        localStorage.setItem('color',div.style.background);
    }
    else{
        div.style.background = "rgb(140, 105, 163)";
        localStorage.setItem('color',div.style.background);
    }
}
div.style.background = localStorage.getItem('color');