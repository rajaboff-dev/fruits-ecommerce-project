let hamburger = document.getElementById('bar')
let navLinks = document.getElementById('nav-links')
let signUpBtn = document.getElementById('sign-up-btn')
let signUpModal = document.getElementById('sign-up')
let authModalCloseBtn = document.getElementById('auth-modal-close')

document.addEventListener('DOMContentLoaded',
    function () {
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
    });


/*====================For Responsive===============*/
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('sm:hidden')
})


signUpBtn.addEventListener('click', () => {
    signUpModal.classList.toggle('hidden')
})

authModalCloseBtn.addEventListener('click', () => {
    signUpModal.classList.add('hidden')
})