/* Ativa o efeito */
$('.owl-carousel').owlCarousel({
    loop:true, // Efeito de Rolagem das caixas
    margin:10, // Margem entre caixas
    nav:false, // Botões de Navegação
    responsive:{ // Responsividade
        0:{
            items:1 // Quantidade de itens em tela
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})