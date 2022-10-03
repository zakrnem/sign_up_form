let userPass1 = document.getElementById('pass1');
let userPass2 = document.getElementById('pass2');

let pass2Message = document.createElement('div');
pass2Message.textContent = 'Passwords do not match';
pass2Message.style.color = 'red';
let passNode = document.querySelector('.password2');


userPass2.addEventListener('input', (e) => {
    if(userPass1.value !== userPass2.value) {
        userPass2.setCustomValidity('Passwords do not match');
        userPass2.style.cssText = 'background: rgba(255, 255, 255, 0.5); border: 2px dashed red; border-radius: 5px;';
        passNode.appendChild(pass2Message);
    }
    if(userPass2.value===userPass1.value) {
        userPass2.style.cssText = 'background: rgba(255, 255, 255, 0.5); border: 2px solid green; border-radius: 5px;';
        passNode.removeChild(pass2Message);
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