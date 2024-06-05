const theme = document.querySelector('#theme')

theme.addEventListener('click', handleTryClick)

function handleTryClick() {
    toggleMode()
}

function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
}