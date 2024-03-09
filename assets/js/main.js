var clickMenu = document.getElementById('click-menu');
clickMenu.addEventListener('click', function() {
    var headerShow = document.querySelector('.show-header-mobile');
    if (headerShow) {
        headerShow.classList.toggle('showMenuClick');
    }
});
