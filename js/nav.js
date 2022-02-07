const createNav = () =>{
    let nav = document.querySelector('.navbar')

    nav.innerHTML = `
        <div class="title">
            <a class="link-item link" href="#">Michael_DeV</a>
        </div>
        <ul class="nav-links">
            <li class="link-item btn"><a class="link" href="#">Sobre</a></li>
            <li class="link-item btn"><a class="link" href="#">Portifólio</a></li>
            <li class="link-item btn"><a class="link" href="#">Contato</a></li>
        </ul>
    `

}

createNav()