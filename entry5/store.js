document.addEventListener('DOMContentLoaded', function () {
    var storefront = document.getElementById('storefront');

    // Function to shuffle items
    function shuffleItems() {
        var items = Array.from(storefront.getElementsByClassName('item'));
        for (var i = items.length; i >= 0; i--) {
            storefront.appendChild(items[Math.random() * i | 0]);
        }
    }

    
});


window.onscroll = function () {
    var myDiv = document.querySelector('.header');
    var navbar = document.querySelectorAll('.navbar a span');
    var rootStyle = document.documentElement.style;
    if (window.pageYOffset > 90) {
        myDiv.style.background = '#151515';
        navbar.forEach(item => {
            item.style.setProperty('color', '#F3F1EE', 'important');
        });
        rootStyle.setProperty('--navbar-before-bg', '#F3F1EE');
    } else {
        myDiv.style.background = '';
        navbar.forEach(item => {
            item.style.setProperty('color', '#151515', 'important');
        });
        rootStyle.setProperty('--navbar-before-bg', '#151515');
    }
};