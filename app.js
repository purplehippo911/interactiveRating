const card = document.querySelector('.card');
const openDialog = document.querySelector('.submit');
const dialog = document.querySelector('#dialog');
const buttons = document.querySelectorAll('.button');
const ratediv = document.querySelector('span');
let number;

buttons.forEach((button) => {
        button.addEventListener('click', () => {
            number = button.innerHTML;
            const htmlText = `<span>${number}</span> `;
            ratediv.innerHTML = htmlText;

        });
    });

openDialog.addEventListener('click', () => {
    if (number > 0) {
        card.classList.add('close');
        card.classList.add('transition');
        dialog.classList.add('active');
        dialog.classList.add('transition');
    }
})
