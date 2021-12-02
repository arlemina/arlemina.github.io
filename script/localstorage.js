let colorbutton = document.querySelector("#colorbutton");
let textarea = document.querySelector("#text-area")

colorbut.onclick=function(){
    if(textarea.style.background == "red")
    {
        textarea.style.background = "green";
        localStorage.setItem('color',textarea.style.background);
    }
    else{
        textarea.style.background = "red";
        localStorage.setItem('color',textarea.style.background);
    }
}

textarea.style.background = localStorage.getItem('color');