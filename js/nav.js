const createNav = () =>{
    let nav = document.querySelector('.navbar')

    nav.innerHTML = `
        <div class="title">
            <a class="link-item link" href="index.html">Michael_DeV</a>
        </div>
        <ul class="nav-links">
            <li class="link-item btn"><a class="link" href="index.html">Sobre</a></li>
            <li class="link-item btn"><a class="link" href="portifolio.html">Portifólio</a></li>
            <li class="link-item btn"><a class="link" href="contato.html">Contato</a></li>
        </ul>
    `

}

createNav()