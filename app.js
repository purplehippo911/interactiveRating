const openDialog = document.querySelector('.submit');
const closeDialog = document.querySelector('#dialog > h2');
const dialog = document.querySelector('#dialog');
const rating = document.querySelectorAll('.rating');

openDialog.addEventListener('click', (e) => {
    dialog.showModal();
    dialog.classList.add('.active');
    console.log(e);
})

closeDialog.addEventListener('click', () => {
    dialog.close()
})