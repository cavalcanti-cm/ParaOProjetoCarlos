const palavras = ["sol", "livro", "lua", "cadeira", "mesa", "mar"]

function maistres(array){
    return array.filter(palavras => palavras.length > 3)

}

