document.addEventListener('keydown', function (e) {
    if (e.ctrlKey == true && (e.key == 'c' || e.key == 'C')) {
        e.preventDefault();
        alert('This website doen\'t allow to copy');
    }
})

document.addEventListener('dragstart', function(e){
    e.preventDefault();
})
document.addEventListener('contextmenu', function(e){
    e.preventDefault();
})
let headerShow = document.querySelector('.show-header-mobile');
let clickBtn = document.querySelector('#click-menu');
clickBtn.addEventListener('click', function () {
    if (headerShow.style.display == 'flex') {
        headerShow.style.display = 'none';
    }
    else headerShow.style.display = 'flex';
});

let buyButtons = document.querySelectorAll('.btn-buy-ticket');
let buyWindow = document.querySelector('#section--2');

for (let index in buyButtons) {
    buyButtons[index].onclick = function (e) {
        buyWindow.style.display = 'flex';
    }
}

let exitButtons = document.querySelectorAll('.exit-buy-window');

for (let i in exitButtons) {
    exitButtons[i].onclick = function () {
        buyWindow.style.display = 'none';
    }
}

buyWindow.addEventListener('click', function(){
    buyWindow.style.display = 'none';
})

let boxBuy = document.querySelector('.box__buy-tickets');
boxBuy.addEventListener('click', function(e){
    e.stopPropagation();
})
