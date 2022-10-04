let userPass1 = document.getElementById('pass1');
let userPass2 = document.getElementById('pass2');

let passMessage = document.querySelector('.pass-message');


userPass2.addEventListener('input', (e) => {
    if(userPass1.value !== userPass2.value) {
        userPass2.setCustomValidity('Passwords do not match');
        userPass2.style.cssText = 'background: rgba(255, 255, 255, 0.5); border: 2px dashed red; border-radius: 5px;';
        passMessage.textContent = 'Passwords do not match';
        passMessage.style.color = 'red';
        
    }
    if(userPass2.value===userPass1.value) {
        userPass2.style.cssText = 'background: rgba(255, 255, 255, 0.5); border: 2px solid rgb(30, 111, 124); border-radius: 5px;';
        passMessage.innerHTML = '&nbsp';
        userPass2.setCustomValidity("");
    }
})

let userPhone = document.getElementById('phone');
let phoneErrorCount = 0;
userPhone.addEventListener('input', (e) => {
    if(userPhone.value.length<5 && phoneErrorCount < 1) {
        userPhone.setCustomValidity('Enter a valid phone number');
        phoneErrorCount += 1;
        console.log(phoneErrorCount);
    }
    else if (userPhone.value.length<5 && phoneErrorCount >= 1) {
        console.log(phoneErrorCount)
        userPhone.setCustomValidity('The number should have at least 4 digits');
    }
})