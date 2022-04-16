const card = document.querySelector('.card');
const openDialog = document.querySelector('.submit');
const dialog = document.querySelector('#dialog');
const buttons = document.querySelectorAll('.button');
const ratediv = document.querySelector('span');
const h2 = document.querySelector('#dialog > h2');
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
        dialog.classList.add('active');
    }
})

// To close the dialog and bring back the card //
h2.addEventListener('click', () => { 
    card.classList.remove('close');
    dialog.classList.remove('active');
})
