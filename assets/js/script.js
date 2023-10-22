const buttonMenu = document.getElementById('button-menu')
const menu = document.getElementById('menu')
menu.style.display = 'none'

buttonMenu.addEventListener('click', function() {
    if (menu.style.display == 'none') {
        menu.style.display = 'block'
        return
    }

    menu.style.display = 'none'
})