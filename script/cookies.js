window.onload = function(){
	
let colorbutton1 = document.querySelector("#color-button1");
let div1 = document.querySelector("#div-for-cookie")

colorbutton1.onclick=function(){
    if(div1.style.background == "red")
    {
        div1.style.background = "black";
		document.cookie = "color=black"
        setCookie("color",div1.style.background);
    }
    else{
        div1.style.background = "red";
		document.cookie = "color=red";
        setCookie("color",div1.style.background);
    }
}
div1.style.background = getCookie("color");

}

/*
let data3 = "";
let checkbox = document.querySelectorAll(".therd");
for(let i = 0;i<checkbox.length;i++){
    if(checkbox[i].checked){
        data3 += "  " + checkbox[i].value;
    }
}
*/

/*
document.cookie = "yummy_cookie=choco";
document.cookie = "name=ch;max-age=2629743";
/*
jQuery(document).ready(function($){ /* функция которая типа проверила что докуммент готов безопасно выполнять скрипт */