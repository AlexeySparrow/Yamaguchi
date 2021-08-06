/* table page */
const btnUp = document.getElementById('up')
const btnDown = document.getElementById('down')

if (document.querySelector('.tablePage')) {

    btnDown.addEventListener('click', () => {
        gsap.to('.tablePage__tableTop', 2, {
            x: -3.5,
            y: '30%'
        })

        btnDown.setAttribute('disabled', true)
        btnUp.removeAttribute('disabled')
    })

    btnUp.addEventListener('click', () => {
        gsap.to('.tablePage__tableTop', 2, {
            x: -3.5,
            y: 7
        })

        btnUp.setAttribute('disabled', true)
        btnDown.removeAttribute('disabled')
    })

}

/* girl page */
const girlPageAnimationCircle = gsap.timeline()

girlPageAnimationCircle.to('.girlPage__girlImg', 0, {
    y: '120%'
}, 0)

girlPageAnimationCircle.to('.girlPage__girlCircle-2', 1, {
    opacity: 1,
    width: "90%"
})

girlPageAnimationCircle.to('.girlPage__girlCircle-1', 1, {
    opacity: 1,
    width: "90%"
})

girlPageAnimationCircle.to('.girlPage__girlImg', 2, {
    y: 40
}, '-=1.5')

girlPageAnimationCircle.to('.girlPage__girlCircle-2', 1, {
    width: "50%"
}, '-=1')

girlPageAnimationCircle.to('.girlPage__girlCircle-1', 1, {
    width: "50%"
}, '-=1')

const girlPageAnimationGirl = gsap.timeline({repeat: -1, repeatDelay: 0, delay: 0})

setTimeout(() => {
    girlPageAnimationGirl.to('.girlPage__girlImg', 3, {
        y: 40
    })

    girlPageAnimationGirl.to('.girlPage__girlImg', 6, {
        y: 80
    })

    girlPageAnimationGirl.to('.girlPage__girlImg', 6, {
        y: 40
    })
}, 3000)


