$(document).ready(function() {
    $('button').click(function(e) {
        e.preventDefault();

        const tarefa = $('#descricao-tarefa').val();
        const novoItem = $('<li class="coluna"></li>');

        $(`<div>${tarefa}</div>`).appendTo(novoItem);
        
        $(novoItem).appendTo('ul');
        $('#descricao-tarefa').val('');
    });

    $('ul').on('click', 'li', function() {
        console.log($(this).text());
        $(this).css('text-decoration' , 'line-through');
    })
})