const openDialog = document.querySelector('.submit');
const dialog = document.querySelector('#dialog');
const buttons = document.querySelectorAll('.button');
const rateSpan = document.querySelector('.rate');
let number;

buttons.forEach((button) => {
        button.addEventListener('click', () => {
            number = buttons.innerHTML;
            console.log(number);
        });
    });

openDialog.addEventListener('click', () => {
    if (number > 0) {
        dialog.classList.add('active');
    }
})
