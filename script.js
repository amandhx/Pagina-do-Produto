const imagemPrincipal = document.getElementById('imagem-principal'); //Seleciona a imagem pricipal

const miniaturas =  document.querySelectorAll('.miniatura'); //Seleciona todas as miniaturas

miniaturas.forEach(miniatura => { //Adiciona um evento de clique para cada miniatura
    miniatura.addEventListener('click', function() { 

    const novaImagem = this.getAttribute ('data_imagem'); //Pega o valor do atributo 'data-imagem' da miniatura clicada

    imagemPrincipal.src = novaImagem;

    });
});
