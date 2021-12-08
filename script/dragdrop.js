let elem = document.querySelector('#elem');
let elem2 = document.querySelector('#elem2');
let parent = document.querySelector('#parent');
let cartd = document.querySelector('#cart-div');

elem.addEventListener('dragend',function(){
    this.style.borderColor = "#8465a8";
});
elem2.addEventListener('dragend',function(){
    this.style.borderColor = "#8465a8";
});

parent.addEventListener('dragover',function(event){
    event.preventDefault(); // важно для срабатывания дропа
    console.log("over");
});

parent.addEventListener('dragenter',function(event){
    this.style.borderColor = "green";
});

parent.addEventListener('dragleave',function(event){
    this.style.borderColor = "gray";
});

// при начале драга запоминаем ид элемента
elem.addEventListener('dragstart',function(){
    this.style.borderColor = "gray";
    event.dataTransfer.setData("Text", event.target.id);
    });
elem2.addEventListener('dragstart',function(){
    this.style.borderColor = "gray";
    event.dataTransfer.setData("Text", event.target.id);
    });

// при отпускании элемента вызываем функцию (увеличения кол-ва товаров)
// для элемента (товара) по его айди   
parent.addEventListener('drop',function(event){
    this.style.borderColor = "gray";
    plusFunction(event.dataTransfer.getData("Text"));
});

//объект элементов корзины
let cart = [
    {
    id: "elem",
    name: "Пицца",
    count: 0,
    },
    
    {
    id: "elem2",
    name: "Торт",
    count: 0,
    }
    ];


// увеличение кол-ва товаров
const plusFunction = id => {
    if (id == "elem")
    {
    cart[0].count++;
    }
    else if (id == "elem2")
    {
        cart[1].count++;
    }
    renderCart(); // рисует заново корзину
}

const renderCart = () => {
    console.log(cart[0].count);
    console.log(cart[1].count);

    cartd.innerHTML = (`Пицца: ${cart[0].count}, Торт: ${cart[1].count}`);
}

renderCart();

