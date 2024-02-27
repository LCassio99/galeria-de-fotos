$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown()
    })

    $('#btn-cancelar').click(function () {
        $('form').slideUp()
    })

    $('form').on('submit', function (e) {
        e.preventDefault()
        const urlNovaImagem = $('#url-imagem-nova').val()
        const novoItem = $('<li style="display: none"></li>')

        $(`<img class="imagem" src="${urlNovaImagem}">`).appendTo(novoItem)   
        $(`<div class="overlay-img"> 
            <a href="${urlNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>
        </div>`).appendTo(novoItem)   

        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(2000)
        $('#url-imagem-nova').val('')
    })
})
