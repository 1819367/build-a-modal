const modalButton = document.querySelector('.jsModalButton')
const modalCloseBtn = document.querySelector('.jsModalClose')
const modalOverlay = document.querySelector('.modal-overlay')

modalButton.addEventListener('click', e => {
    document.body.classList.add('modal-is-open')
})

modalCloseBtn.addEventListener('click', e => {
    document.body.classList.remove('modal-is-open')
})

// add an event listener to the overlay
modalOverlay.addEventListener('click', e => {
    if (!e.target.closest('.modal')) {
        //close modal
        document.body.classList.remove('modal-is-open')
    }
})
