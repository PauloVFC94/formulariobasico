const submitBtn = document.querySelector('.submit-btn');
const stackInput = document.querySelectorAll(".stack-input");
const name = document.querySelector('.name-field');
const email = document.querySelector('.email-field');


submitBtn.addEventListener('click', () => console.log(`${name.value} e ${email.value}`));
