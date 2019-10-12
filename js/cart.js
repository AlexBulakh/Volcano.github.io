var cart = {};


function loadCart(){
    if(localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart'));
    showCart();
    }
}

function showCart(){
    if (!isEmpty(cart)){
        $('.main-cart').html('Корзина пуста !');
    }
    else {
      //  $.getJSON('goods250.json',  function (data){
        $.getJSON('goods1000.json',  function (data){
        //    var goods250 = data;
               var goods1000 = data;
var sum = 0;
            var out = '';
            for (var id in cart) {

                out +='<a>'+id+ '</a>';
              //  out += ` ${goods250[id].description}`;
                out += `<a> ${cart[id]} шт.</a>`;
              //  out += `<button data-id="${id}" class="del-goods">X</button>`;
                out +=  `<a> ${cart[id]*goods1000[id].cost} грн.</a>`;
                out += `<button data-id="${id}" class="minus-goods">-</button>`;
                out += `<button data-id="${id}" class="plus-goods">+</button>`;
            //   out +=  ` ${cart[id]*goods250[id].cost} грн.`;
                sum=sum+cart[id]*goods1000[id].cost;
                out += '<br>';
            }
               out +='<a>Всего: '+sum+' грн.</a>';


            $('.main-cart').html(out);
          $('.del-goods').on('click', delGoods);
            $('.plus-goods').on('click', plusGoods);
            $('.minus-goods').on('click', minusGoods);


        });

    }
}

function delGoods(){
var id = $(this).attr('data-id');
    delete cart[id];
    saveCart();
    showCart();

}
function plusGoods(){
    var id = $(this).attr('data-id');
    cart[id] ++;
    saveCart();
    showCart();

}
function minusGoods(){
    var id = $(this).attr('data-id');
    if (cart[id]==1){
        delete cart[id];
    }else {
    cart[id] --;
    }
    saveCart();
    showCart();

}
function saveCart(){
    localStorage.setItem('cart', JSON.stringify(cart));
}



function isEmpty(object){
    for (var key in object)
    if (object.hasOwnProperty(key)) return true;
    return false;
}

function sendEmail(){

    var Name = $('#Name').val();
    var email = $('#email').val();
    var Phone = $('#Phone').val();
    var Delivery1 = $('#Delivery1').val();
    var Delivery2 = $('#Delivery2').val();
    var Delivery3 = $('#Delivery3').val();
    if (Delivery3!='' && email!='' && Phone!='' ){
if(isEmpty(cart)){

    $.post(
        "core/mail.php",
        {
            "Name" : Name,
            "email" : email,
            "Phone" : Phone,
            "Delivery1" : Delivery1,
            "Delivery2" : Delivery2,
            "Delivery3" : Delivery3,
            "cart" : cart

        },
        function (data){
            if (data==1) {
                alert('Заказ отправлен');
            }else{
                alert('Ошибка, повторите заказ!!!');
                delCart();



            }
        }

    )

    }else{
    alert('Корзина пуста !');
    location.href = 'http://1590049.volcanoh.web.hosting-test.net/reg.html';
    return;
    }
        }else{
        alert('Заполните поля');
        delCart();
        location.href = 'http://1590049.volcanoh.web.hosting-test.net/reg.html';
        return;
        }
    location.href = 'http://1590049.volcanoh.web.hosting-test.net/reg.html';
//location.href = 'http://1590049.volcanoh.web.hosting-test.net/feed.html';
delCart();

}

function delCart(){
    localStorage.removeItem('cart');
}


$(document).ready(function () {
    loadCart();
    $('.send-email').on('click', sendEmail);
});

