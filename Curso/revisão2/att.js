const numeros = ['teste1, teste2, teste3']
//                   0       1       2

const pessoas = {
    nome: 'Mateus',
    idade: 32,
    enderecos: [ //
       {
        rua: "Rua A",
        cidade: "Maceió",
        tipo: "Residencial",
       },
       {
        rua: "Rua B",
        cidade: "Maceió",
        tipo: "comercial",

    
    },
],
};

console.log(pessoas.nome)
console.log(pessoas.enderecos[1].rua)
console.log(pessoas.enderecos.forEach((endereco) =>{
    console.log(endereco.rua)
}))


let biblioteca = {
    categorias: {
      ficcao: {
          nome: "Ficção",
          livros: [
            { titulo: "1986", autor: "George Orwell", anoPublicacao: 1949 },
            { titulo: "Duna", autor: "Frank Herbert", anoPublicacao: 1965 },
          ],
        },
        naoFiccao: {
          nome: "Não Ficção",
          livros: [
            { titulo: "Sapiens", autor: "Yuval Noah Harari", anoPublicacao: 2011 },
            { titulo: "Cosmos", autor: "Carl Sagan", anoPublicacao: 1998 },
          ],
        },
        romance: {
          nome: "Romance",
          livros: [
            { titulo: "Orgulho e Preconceito", autor: "jane Austen", anoPublicacao: 1813 },
            { titulo: "Cem anos de Solidão", autor: "Gabriel Garcia", anoPublicacao: 1967 },
          ],
        },
    },
  };
  