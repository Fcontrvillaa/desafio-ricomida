
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


$('#btn').click(funcion(){
    alert("boton cliqueado")
})

$('#btn2').dblclick(funcion(){
    alert("boton cliqueado 2 veces")
})


$('.hover').hover(
    function() {$(this).css('background-color', 'yellow') },
    function() {$(this).css('background-color', '') },
)


