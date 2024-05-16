let hamburger = document.getElementById('bar')
let navLinks = document.getElementById('nav-links')
let signUpBtn = document.getElementById('sign-up-btn')
let smSignUpBtn = document.getElementById('sm:sign-up-btn')
let signUpModal = document.getElementById('sign-up')
let authModalCloseBtn = document.getElementById('auth-modal-close')
let cartModalCloseBtn = document.getElementById('cart-modal-close')
let addCardModal = document.getElementById('add-cart')
let cardNumberInput = document.getElementById('numbers');


document.getElementById("numbers").addEventListener("input", function(event) {
    var value = event.target.value;
    var numbers = /^[0-9]+$/;
    if (!value.match(numbers)) {
        event.target.value = value.replace(/[^0-9]/g, '');
    }

    let trimmedValue = this.value.replace(/\s/g, ''); // Probellarni o'chirib tashlash
    let formattedValue = trimmedValue.replace(/(\d{4})(?=\d)/g, '$1  '); // 4 ta raqamdan so'ng probel qo'yish
  
    if (trimmedValue.length > 16) {
        trimmedValue = trimmedValue.slice(0, 16); // Faqat 16 ta raqamni qabul qilish
    }
  
    this.value = formattedValue;
});


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



/* Auth */

signUpBtn.addEventListener('click', () => {
    signUpModal.classList.toggle('hidden')
})
smSignUpBtn.addEventListener('click', () => {
    signUpModal.classList.toggle('hidden')
})

authModalCloseBtn.addEventListener('click', () => {
    signUpModal.classList.add('hidden')
})

function showAddCardModal() {
    addCardModal.classList.toggle('hidden')
}

cartModalCloseBtn.addEventListener('click', () => {
    addCardModal.classList.add('hidden')
})
