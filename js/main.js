
var cart ={};


function init(){
$.getJSON("goods500.json", goodsOut500);
}
function goodsOut500(data){
    var out='';
        for (var key in data){
            out +='<article>';
            out +='<img src="image/tastes/'+data[key].img+'" alt="" title="" />';
            out +='<h2>'+data[key].description+'</h2>';
            out +='<p>'+data[key].cost+' грн</p>';
            out +=`<button class="add-to-cart" data-id="${key}">Добавить в корзину</button>`;
            out +='</article>';
        }
    $('.goods-out500').html(out);

}
$(document).ready(function(){
    init()
});


function init1(){
$.getJSON("goods250.json", goodsOut250);
}
function goodsOut250(data){
    var out='';
        for (var key in data){
            out +='<article>';
            out +='<img src="image/tastes/'+data[key].img+'" alt="" title="" />';
            out +='<h2>'+data[key].description+'</h2>';
            out +='<p>'+data[key].cost+' грн</p>';
            out +=`<button class="add-to-cart" data-id="${key}">Добавить в корзину</button>`;
            out +='</article>';
        }
    $('.goods-out250').html(out);

}
$(document).ready(function(){
    init1()
});

function init2(){
    $.getJSON("goods50.json", goodsOut50);
}
function goodsOut50(data){
    var out='';
        for (var key in data){
            out +='<article>';
            out +='<img src="image/tastes/'+data[key].img+'" alt="" title="" />';
            out +='<h2>'+data[key].description+'</h2>';
            out +='<p>'+data[key].cost+' грн</p>';
            out +=`<button class="add-to-cart" data-id="${key}">Добавить в корзину</button>`;
            out +='</article>';
        }
    $('.goods-out50').html(out);
    $('button.add-to-cart').on('click', addToCart);

}

function addToCart(){
    var id = $(this).attr('data-id');

    if (cart[id]==undefined){
        cart[id] = 1;
    }else {
        cart[id]++
    }
    showMiniCart();
        saveCart();
}

function saveCart(){
    localStorage.setItem('cart', JSON.stringify(cart));
}

function showMiniCart(){
    var out="";
    for (var id in cart){
        out += id +' - '+ cart[id]+' шт. '+'<br>';

    }

    $('.mini-cart').html(out);



}
function loadCart(){
    if(localStorage.getItem('cart')){
        cart = JSON.parse(localStorage.getItem('cart'));
        showMiniCart();
    }
}

$(document).ready(function(){
    init2();
    loadCart();
});










