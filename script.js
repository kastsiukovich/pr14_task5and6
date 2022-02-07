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

    if (event.target.tagName === 'LI') {
        if (event.target.style.textDecoration === 'line-through') {

            event.target.setAttribute('style', 'text-decoration: none');

        } else {
            event.target.setAttribute('style', 'text-decoration: line-through ');
        }
    }
})


// Task4 1вариант 
// var form = document.getElementsByTagName('form')[0];
// form.addEventListener('blur', function (e) {
//     console.log(e.target)

//     var d = e.target.dataset.length;
//     // var span = e.target.classList.contains('yes');
//     // console.log(name)
//     if (e.target.value.length > d) {
//         e.target.style.borderColor = "green";

//     } else {
//         e.target.style.borderColor = "red";
//         // var span = document.querySelector('.yes');
//         // for (var i of span) {
//             // console.log(i)
//             // if (e.target == i) {

//             // }
//         //     span.i.innerHTML = 'Неправильное количество символов';
//         // }
//     }
// }, true)
// Task4
//второй вариант
var input1 = document.forms[0].elements.input1;
var input2 = document.forms[0].elements.input2;
var input3 = document.forms[0].elements.input3;

input1.addEventListener('blur', isCorrectLength)
input2.addEventListener('blur', isCorrectLength)
input3.addEventListener('blur', isCorrectLength)

function isCorrectLength(e) {
    var correctLength = Number(e.target.dataset.length);
    var currentStr = e.target.value.length;
    if (correctLength === currentStr) {
        if (e.target.parentElement.className === 'border-red') {
            e.target.parentElement.classList.remove('border-red');
            e.target.parentElement.classList.add('border-green');
            e.target.nextElementSibling.innerHTML = ''
        } else {
            e.target.parentElement.classList.add('border-green');
        }
    } else if (correctLength != currentStr) {
        e.target.parentElement.classList.add('border-red');
        e.target.parentElement.classList.remove('border-green');
        e.target.nextElementSibling.innerHTML = '<p>Неправильное количество символов</p>'
        e.target.nextElementSibling.style.cssText = 'color: red; font-size: 30px; font-weight: bold'
    }
};

// task 5
var card = document.querySelector('#current-cart');
var price = document.getElementsByClassName('price')[0];
var btn = document.querySelector('#current-cart').lastElementChild.lastElementChild.previousElementSibling;
var sumResult = document.querySelector('#current-total');

card.addEventListener('click', function (event) {

    if (event.target.dataset.subtrac != undefined && document.getElementsByClassName('total')[0].value > 0) {
        document.getElementsByClassName('total')[0].value = Number(document.getElementsByClassName('total')[0].value) - 1;
    }
    if (event.target.dataset.sum != undefined) {
        document.getElementsByClassName('total')[0].value = Number(document.getElementsByClassName('total')[0].value) + 1;
    }
})
btn.addEventListener('click', function (e) {

    if (e.target) {
        sumResult.innerText = `${Number(price.innerText) * document.getElementsByClassName('total')[0].value}`;
    }
});


// task6
var card2 = document.querySelector('#current-cart-items');
var price2 = document.querySelectorAll('.price');
var total = document.getElementsByClassName('total')
var btn2 = document.querySelectorAll('.total-sum')[0];
var sumResult2 = document.querySelector('#current-total-items');

card2.addEventListener('click', function (event) {

    if (event.target.dataset.subtrac != undefined && event.target.nextElementSibling.value > 0) {
        event.target.nextElementSibling.value = Number(event.target.nextElementSibling.value) - 1;
    }
    if (event.target.dataset.sum != undefined) {

        event.target.previousElementSibling.value = Number(event.target.previousElementSibling.value) + 1;
    }
})
btn2.addEventListener('click', function (e) {

    if (e.target) {
        sumResult2.innerText = `${Number(price2[1].innerText) * total[1].value + Number(price2[2].innerText) * total[2].value + Number(price2[3].innerText) * total[3].value + Number(price2[4].innerText) * total[4].value}`;
    }
});



// task7
var input = document.getElementsByTagName('input')[9];
var input7 = document.querySelector('.input7');

input.addEventListener('keydown', function (e) {
    console.log(e.key === "Enter");
    if (e.key === "Enter") {
        input7.insertAdjacentHTML('beforeend', `<p>${input.value}</p>`);
        input.value = '';
        input.focus();
    }
})

// task8

var div1 = document.getElementById('modal-box');
var modal = document.getElementById('modal1');
div1.addEventListener('click', function (e) {
    var currentElement = e.target;
    var currentNumb = e.target.dataset.numb;
    console.log(currentNumb)
    if (currentElement.classList.contains('waves-effect')) {
        generateModalInfo(currentNumb);
        modal.classList.add('modal_open');
    }
})
window.addEventListener('keydown', function (e) {
    if (e.key === "Escape" && modal.classList.contains('modal_open')) {
        modal.classList.remove('modal_open');
    }
});
function generateModalInfo(currentId) {
    var result = listModal.filter(function (item, index) {
        if (item.Number(id) === currentId) {
            return item;
        }
    })
    var modalTitle = document.querySelector('#modal1 h4');
    var modalDescription = document.querySelector('#modal1 p');
    modalTitle.innerHTML = result[0].title;
    modalDescription.innerHTML = result[0].description;


    // console.log(result);
    // return result;
}
