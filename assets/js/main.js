var clickMenu = document.getElementById('click-menu');
var headerShow = document.querySelector('.show-header-mobile');
clickMenu.addEventListener('click', function() {
    if (headerShow) {
        headerShow.classList.toggle('showMenuClick');
    }
}
);
