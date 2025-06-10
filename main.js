const open = documentGetElementById(open)
const modal_container = documentGetElementById(modalContainer)
const close = documentGetElementById(close)

open.addEventListener('click',() =>{
    modal_container.classList.add('show')
})

close.addEventListener('click',() =>{
    modal_container.classList.add('show')
})