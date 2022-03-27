const openDialog = document.querySelector('.submit');
const closeDialog = document.querySelector('#dialog > h2');
const dialog = document.querySelector('#dialog');
const ratingButtons = document.querySelectorAll('.rating > button');
const rateSpan = document.querySelector('.rate');

ratingButtons.forEach((button) => button.addEventListener('click', () => {
    const rateNumber = this.textContent;
    console.log(rateNumber)
}));


openDialog.addEventListener('click', () => {
    dialog.classList.add('active');
})

closeDialog.addEventListener('click', () => {
    dialog.classList.remove('active')
})