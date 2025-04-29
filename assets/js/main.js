
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))




const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')


$('#btn1').click(function() {
   alert("El correo fue enviado correctamente...")
})

$(document).ready(function() {
    $("u").on("dblclick", function() {
        if ($(this).text() === "INGREDIENTES" || $(this).text() === "PREPARACIÓN ") {
            $(this).css("color", "red");
        }
    });
});

$('.card-title').click(function(){
    $('.box').toggle()

})




//$('#btn').click(funcion(){
//     alert("boton cliqueado")
// })

// $('#btn2').dblclick(funcion(){
//     alert("boton cliqueado 2 veces")
// })


// $('.hover').hover(
//     function() {$(this).css('background-color', 'yellow') },
//     function() {$(this).css('background-color', '') },
// )


