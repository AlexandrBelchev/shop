// main slider
$(document).ready(function() {
    $('.offers__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true
    });
    $(".lazy").slick({
        lazyLoad: 'ondemand',
        infinite: true
    });

});
/*
window.onload= function () {
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        document.getElementsByClassName(".cards").innerHTML = myArr[0];
    }
};
xmlhttp.open("GET", "products.txt", true);
xmlhttp.send();
};
*/
// brand filter
let cards = document.getElementsByClassName('cards__item');
let inputs = document.getElementsByClassName('form__brand');
let filterBtns = Array.from(inputs);

let arr = [];
filterBtns.forEach( function(el) {
    el.onclick = function() {
        console.log(el.name);
        let name = el.name;
        let index = arr.indexOf(name);
        if (index === -1) {
            arr.push(name)
        } else {
            arr.splice(index, 1)
        }
        filter(arr, cards)
    }
});

function filter(filtersArray, elements) {
    let elArray = Array.from(elements);
    if(filtersArray.length) {
        let newArr = elArray.filter(function(el) {
            console.log(el);
            return filtersArray.some( filter => {
                console.log(filter, el.querySelector('.feature__title').dataset.brand);
                return el.querySelector('.feature__title').dataset.brand == filter;
            })
        });
        console.log(newArr);

        elArray.forEach(function(el) {
            el.classList.add('is-passive')
        });
        newArr.forEach( function(el) {
            el.classList.remove('is-passive')
        })

    } else {
        elArray.forEach(function(el) {
            el.classList.remove('is-passive')
        })
    }
}















// category filter
let inputs2 = document.getElementsByClassName('form__category');
let filterBtns2 = Array.from(inputs2);
let arr2 = [];
filterBtns2.forEach( function(el) {
    el.onclick = function() {
        console.log(el.value);
        let value = el.value;
        let index = arr2.indexOf(value);
        if (index === -1) {
            arr2.push(value)
        } else {
            arr2.splice(index, 1)
        }
        filter2(arr2, cards)
    }
});
function filter2(filtersArray2, elements) {
    let elArray = Array.from(elements);
    if(filtersArray2.length) {
        let newArr2 = elArray.filter(function(el) {
            console.log(el);
            return filtersArray2.some( filter2 => {
                console.log(filter2, el.querySelector('.cards__front').dataset.category);
                return el.querySelector('.cards__front').dataset.category == filter2;
            })
        });
        console.log(newArr2);

        elArray.forEach(function(el) {
            el.classList.add('is-passive')
        });
        newArr2.forEach( function(el) {
            el.classList.remove('is-passive')
        })

    } else {
        elArray.forEach(function(el) {
            el.classList.remove('is-passive')
        })
    }
}

//init range slider
$( function() {
    $( ".slider-range" ).slider({
        range: true,
        min: 100,
        max: 1000,
        step: 10,
        values: [ 100, 1000 ],
        slide: function( event, ui ) {
            $( ".from" ).val(ui.values[ 0 ]+"$" );
            $( ".to" ).val(ui.values[ 1 ]+"$");
        }
    });
    $( ".from" ).val($( ".slider-range" ).slider( "values", 0 )+"$");
    $( ".to" ).val($( ".slider-range" ).slider( "values", 1 )+"$");
});

// price filter
let _from = document.querySelector('.from');
let _to = document.querySelector('.to');
let slider_range = document.querySelector('.slider-range');
let arr3=[];
slider_range.oninput = function() {
    console.log(_from.value)
};
let outp = document.querySelector('.outp');
let rangeput = document.querySelector('.rangeput');
    rangeput.oninput=function (qwe) {
    outp.value=rangeput.value
};



// total

let priceEl = document.querySelector('.view__price');
let elementTotal = document.querySelector('.total');
let input = document.querySelector('.quantity');

let price = +priceEl.innerHTML;
input.onclick = function() {
    getValue(event, price)
};

input.oninput = function() {
    getValue(event, price)
};

function getValue(event, price) {
    if(event.target.value < 1) {
        event.target.value = 1
    }
    let quantity = event.target.value;
    let total = quantity * price;
    elementTotal.innerHTML = ' = ' + total + ' грн.'
}