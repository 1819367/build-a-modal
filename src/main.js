const modalButton = document.querySelector('.jsModalButton')
const modalCloseBtn = document.querySelector('.jsModalClose')
const body = document.body
const modalOverlay = document.querySelector('.modal-overlay')

modalButton.addEventListener('click', e => {
    // console.log('button clicked!')
    body.classList.add('modal-is-open')
})

modalCloseBtn.addEventListener('click', e => {
    body.classList.remove('modal-is-open')
})

// add an event listener to the overlay
modalOverlay.addEventListener('click', e => {
    if (!e.target.closest('.modal')) {
        //close modal
        body.classList.remove('modal-is-open')
    }
})
