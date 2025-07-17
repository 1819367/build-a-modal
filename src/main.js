const modalButton = document.querySelector('.jsModalButton')
const modalCloseBtn = document.querySelector('.jsModalClose')
const body = document.body

modalButton.addEventListener('click', e => {
    // console.log('button clicked!')
    body.classList.add('modal-is-open')
})

modalCloseBtn.addEventListener('click', e => {
    body.classList.remove('modal-is-open')
})
