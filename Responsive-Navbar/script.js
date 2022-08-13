const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

const bars = document.querySelectorAll('.bar')

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    toggleButton.classList.toggle('rotate')

    bars.forEach(bar => bar.classList.toggle('x'))
})

