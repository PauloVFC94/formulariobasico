const submitBtn = document.getElementsByClassName("submit-btn");
const stackInput = document.querySelectorAll(".stack-input");
stackInput[1].checked = true;
console.log(stackInput[1].value);
console.log(stackInput[1]);
console.log(submitBtn);

const checkStack = () => {
    for (let i = 0; i < stackInput.length; i++) {
        if (stackInput[i].checked) {
            console.log(stackInput).value;
            return stackInput[i].value;
        }
    }
}

const tinoco = checkStack();


submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(submitBtn);
})