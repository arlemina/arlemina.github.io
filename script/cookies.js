
let colorbut = document.querySelector("#color-button1");
let d = document.querySelector("#div-for-cookie")

colorbut.onclick=function(){
    if(d.style.background == "red")
    {
        d.style.background = "black";
		document.cookie = "color=black"
        setCookie("color",d.style.background);
    }
    else{
        d.style.background = "red";
		document.cookie = "color=red";
        setCookie("color",d.style.background);
    }
}
d.style.background = getCookie("color");

