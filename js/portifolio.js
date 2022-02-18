const projects = [...document.querySelectorAll('.projects')]
const nxtBtn = [... document.querySelectorAll('.nxt-btn')]
const preBtn = [... document.querySelectorAll('.pre-btn')]

projects.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect()
    let containerWidth = containerDimenstions.width

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth
    })
})

