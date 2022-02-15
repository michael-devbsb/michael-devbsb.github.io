var foto = document.querySelector('.imglogo')
var navTitle = document.querySelector('.title')


foto.addEventListener("mouseover", function(event){
    foto.setAttribute('src', 'img/foto-colorida.png')
}, false)

foto.addEventListener("mouseout", function(event){
    foto.setAttribute('src', 'img/foto-pretoebranco.png')
}, false)