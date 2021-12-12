

/*
function f(a){
    document.images[1].src = document.images[a].src;
}
*/

slide_show = null;
a=2;

function mult()
{
    // главная картинка заменяется на картинку с индексом a
    document.images[1].src = document.images[a].src;
    
    // появление бордюра на миниатюре главной картинки
    document.images[a].classList.toggle("bord");
    if(a!=2){
        document.images[a-1].classList.toggle("bord");
    }
    else{
        if(document.images[4].classList.contains('bord')){
        document.images[4].classList.toggle("bord");
        }
    }

    // цикличность картинок
    if(a==4){
        a=1;
    }
    // увеличение индекса на 1
    a=a+1;

    // цикличность слайд-шоу
    slide_show = setTimeout("mult()", 1000);
    
}


function left(){

    a=a-1;

    if(a==1){
        a=4;
    }

    document.images[1].src = document.images[a].src;   

}
    
function right(){

    a=a+1;

    if(a==5){
        a=2;
    }

    document.images[1].src = document.images[a].src;
}

function stop()
{
    clearTimeout(slide_show);   
}
