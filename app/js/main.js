/*window.onload=function () {
let quantity = 1;
let quantityEl = document.querySelector('.quantity');
let _plus = document.querySelector('.counter__plus') ;
let _minus = document.querySelector('.counter__minus');

    _plus.onclick = function () {
        quantity++;
        quantityEl.value = quantity;
    };
    _minus.onclick = function () {
        if (quantity > 1) {
            quantity--;
            quantityEl.value = quantity;
        }
    }
};*/

// flying image
/*let order1 = document.querySelector('.order');
let button__cart = document.querySelector('.button__cart');

order1.onclick = function() {
    let c = button__cart.getBoundingClientRect(),
        scrolltop = document.body.scrollTop + c.top,
        scrollleft = document.body.scrollLeft + c.left;
    alert('top:' + scrolltop + ' left: ' + scrollleft + '');
};
let element = document.querySelector('.view__image');
order1.onclick = function () {
    let clone = element.cloneNode();
    console.log(clone);
    clone.style.position = 'absolute';
    clone.style.left = '220px';
    clone.style.top = '300px';
    clone.style.display = 'block';
    clone.style.transform = 'scale(0.5)';
    clone.style.transition = '5s linear all';
    let body = document.querySelector('body');
    body.append(clone);
    setTimeout( () => {
        clone.style.left = '90%';
        clone.style.top = '20px'

    }, 100)
};*/
/*let _nav = document.getElementsByClassName('.nav__link')
window.onload=function () {
    _nav.each(function () {
        let location = window.location.href;
        let link = this.href;
        if(location == link) {
            this.classList.add('active');
        }
    });
}*/

$(function () {
    $('nav li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if(location == link) {
            $(this).addClass('active');
        }
    });
});

// menu

$('.mobile').bind('click', function() {
    $('.sidebar').addClass('menu--active');
});
$('.sidebar__close').bind('click', function() {
    $('.sidebar').removeClass('menu--active');
});

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





// size filter
let inputs6 = document.getElementsByClassName('form__size');
let filterBtns6 = Array.from(inputs6);
let arr6 = [];
filterBtns6.forEach( function(el) {
    el.onclick = function() {
        console.log(el.value);
        let value = el.value;
        let index = arr6.indexOf(value);
        if (index === -1) {
            arr6.push(value)
        } else {
            arr6.splice(index, 1)
        }
        filter2(arr6, cards)
    }
});
function filter6(filtersArray6, elements) {
    let elArray = Array.from(elements);
    if(filtersArray6.length) {
        let newArr6 = elArray.filter(function(el) {
            console.log(el);
            return filtersArray6.some( filter6 => {
                console.log(filter6, el.querySelector('.feature__size').dataset.sizes);
                return el.querySelector('.feature__size').dataset.sizes == filter6;
            })
        });
        console.log(newArr6);

        elArray.forEach(function(el) {
            el.classList.add('is-passive')
        });
        newArr6.forEach( function(el) {
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
};












let numberFrom;
let numberTo;
//init range slider
$( function() {
    $( ".slider-range" ).slider({
        range: true,
        min: 100,
        max: 1000,
        step: 10,
        values: [ 100, 1000 ],
        slide: function( event, ui ) {
            numberFrom=($( ".from" ).val(ui.values[ 0 ]+"$" ));
            numberTo=$( ".to" ).val(ui.values[ 1 ]+"$");
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
slider_range.onchange = function() {
    console.log(numberFrom)
};
let outp = document.querySelector('.outp');
let rangeput = document.querySelector('.rangeput');
    rangeput.oninput=function (sd) {
    outp.value=rangeput.value
};


// active links

