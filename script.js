// Task1
var todoList = document.querySelector('#todo-list');
todoList.addEventListener('click', function (e) {
    if (e.target.classList.contains('waves-effect')) {
        var newTitle = prompt('Введите новый Task!');

        e.target.previousElementSibling.innerText = newTitle;
    }

})

// Task2
var div1 = document.getElementsByTagName('div')[2];

div1.addEventListener('click', function (e) {
    // console.log(e.target.innerText)
    if (e.target.classList.contains('waves-light')) {
        var input = document.getElementsByTagName('input')[0];
        input.value = e.target.innerText * e.target.innerText;
    }
})
// Task3
var ul = document.getElementById('menuList');
var butt = document.getElementById('btnAdd');
butt.addEventListener('click', function () {
    var newTit = prompt('Введите значение нового task');
    ul.innerHTML += `<li>task № ${newTit}</li>`;


})


ul.addEventListener('click', function (event) {
    // console.log(event.target.tagName)
    if (event.target.tagName === 'LI') {
        if (event.target.style.textDecoration === 'line-through') {
            // console.log(event.target.getAttribute("style"))
            event.target.setAttribute('style', 'text-decoration: none');
            // event.target.style.textDecoration = 'none';
        } else {
            event.target.setAttribute('style', 'text-decoration: line-through ');
        }
    }
})


// Task4
var form = document.getElementsByTagName('form')[0];
form.addEventListener('blur', function (e) {
    console.log(e.target)

    var d = e.target.dataset.length;
    // var span = e.target.classList.contains('yes');
    // console.log(name)
    if (e.target.value.length > d) {
        e.target.style.borderColor = "green";

    } else {
        e.target.style.borderColor = "red";
        var span = document.querySelector('.yes');
        for (var i of span) {
            // console.log(i)
            // if (e.target == i) {

            // }
            span.i.innerHTML = 'Неправильное количество символов';
        }



    }
}, true)


// task 5
var card = document.querySelector('#current-cart');
var price = document.getElementsByClassName('price')[0].innerText;
var btn = document.querySelector('#current-cart').lastElementChild.lastElementChild.previousElementSibling;
var sumResult = document.querySelector('#current-total');

card.addEventListener('click', function (event) {

    // var minus = document.getElementsByClassName('total')[0].value;


    if (event.target.dataset.subtrac != undefined && document.getElementsByClassName('total')[0].value > 0) {
        document.getElementsByClassName('total')[0].value = Number(document.getElementsByClassName('total')[0].value) - 1;
    }
    if (event.target.dataset.sum != undefined) {
        document.getElementsByClassName('total')[0].value = Number(document.getElementsByClassName('total')[0].value) + 1;
    }
})
btn.addEventListener('click', function (e) {
    // console.log(typeof price)
    if (e.target) {
        sumResult.innerText = `${Number(price) * document.getElementsByClassName('total')[0].value}`;
    }
});


// task6
var card2 = document.querySelector('#current-cart-items');
var price2 = document.querySelectorAll('.price');
var total = document.getElementsByClassName('total')
var btn2 = document.querySelectorAll('.total-sum')[0];
var sumResult2 = document.querySelector('#current-total-items');

card2.addEventListener('click', function (event) {
    //    console.log(event.target.dataset.subtrac)
    if (event.target.dataset.subtrac != undefined && event.target.nextElementSibling.value > 0) {
        event.target.nextElementSibling.value = Number(event.target.nextElementSibling.value) - 1;
    }
    if (event.target.dataset.sum != undefined) {
        // console.log(event.target.previousElementSibling.value)
        event.target.previousElementSibling.value = Number(event.target.previousElementSibling.value) + 1;
    }
})
btn2.addEventListener('click', function (e) {
    // console.log(e.target)
    if (e.target) {
        sumResult2.innerText = `${Number(price2[1].innerText) * total[1].value + Number(price2[2].innerText) * total[2].value + Number(price2[3].innerText) * total[3].value + Number(price2[4].innerText) * total[4].value}`;
    }
});


