main.remove(main.querySelector('main#main'))

const newHeader = document.createElement('h1')
document.body.appendChild(newHeader)
newHeader.id = "victory"
newHeader.innerHTML = "Rebecca is the champion";
