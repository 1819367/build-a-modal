import { gsap } from "gsap";

const modalButton = document.querySelector('.jsModalButton')
const modalCloseBtn = document.querySelector('.jsModalClose')
const modalOverlay = document.querySelector('.modal-overlay')
const wavingHand = document.querySelector('.wave-hand')


// Point hand animation
window.addEventListener('DOMContentLoaded', () => {
    const pointHand = document.querySelector('.point-hand')
    
    gsap.from(pointHand, {
        y: '4em',
        opacity: 0,
        duration: 1,
        // ease: 'power2.out', commented out 
        ease: 'cubic-bezier(0.18,0.89,0.32,1.28)',
    })
})

// Wave hand animation
function wave() {
    const t1 = gsap.timeline({})
    t1.set(wavingHand, { transformOrigin: 'bottom center'})
    t1.from(wavingHand, {
        duration: 0.5,
        scale: 0.25,
        opacity: 0,
        ease: 'back.out(1.5)',
    })
    t1.to(wavingHand, { duration: 0.2, rotation: 15,})
    t1.to(wavingHand, { duration: 0.2, rotation: -15,})
    t1.to(wavingHand, { duration: 0.2, rotation: 15,})
    t1.to(wavingHand, { duration: 0.2, rotation: -15,})
    t1.to(wavingHand, { duration: 0.2, rotation: 0,})
}

// Opens modal
modalButton.addEventListener('click', e => {
    document.body.classList.add('modal-is-open')
    wave()
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