document.addEventListener('DOMContentLoaded',
    function (e) {
        const navItems = document
            .querySelectorAll('.nav-link');
 
        navItems.forEach(item => {
            item.addEventListener('click',
                function () {
                    navItems.forEach(navItem => navItem
                        .classList.remove('active'));
                    this.classList.add('active');
                });
        });
        e.preventDefault()
    });


let hamburger = document.getElementById('bar')
let navLinks = document.getElementById('nav-links')
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('sm:hidden')
})