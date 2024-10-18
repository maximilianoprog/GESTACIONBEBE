document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger');
    var close = document.querySelector('.close');
    var menu = document.querySelector('.menu');

    hamburger.addEventListener('click', function() {
        menu.classList.add('active');
    });

    close.addEventListener('click', function() {
        menu.classList.remove('active');
    });
});
