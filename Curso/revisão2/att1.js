// let produtos = [{ nome: 'Camiseta', categoria: 'Roupas' }, { nome: 'Celular', categoria: 'Eletrônicos' }];
// let precos = [{ nome: 'Camiseta', preco: 20 }, { nome: 'Celular', preco: 500 }];

// const combinarProdutos = (arrayProdutos, arrayPrecos) => { 
//     // console.log('Array Produtos: ', arrayProdutos) 
//     // //console.log('Array Preços:', arrayPrecos) 
//     return arrayProdutos.map((produto)=>{
//        //  console.log('Objeto Produto:'produtos) 
//          let precoProduto = arrayPrecos.find((preco) => preco.nome === produto.nome);
//         //  console.log('Objeto preço produto:',precoProduto) 
//           return{ 
//             nome: produto.nome,
//              categoria: produto.categoria,
//               preco: precoProduto.preco
//             } 
//         }); 
//     }; combinarProdutos(produtos, precos); 
//    // console.log(combinarProdutos(produtos, precos))


// //att02
//     const produtoPorCategoria = (catergoria, arrayProdutos) => {
//         return arrayProdutos.filter((produto)=> produto.categoria === categoria)
// }

//     console.log(produtoPorcategoria(`Eletronicos`, produtos))

//   //  att03

//     let itens = [{ nome: 'Camiseta', preco: 20 }, { nome: 'Celular', preco: 500 }];
// let quantidades = [3, 1];

//     const precoTotal = (arrayProdutos, arrayQuantidades) => {
//         return arrayProdutos.map((produto, index) => {
//             //console.log(produto)
//             let precoTotal = produto.preco * arrayQuantidades[index];

//             return {
//                 nome: produto.nome,
//                 preço: produto.preco,
//                 valorTotal: precoTotal,
//             };
//         });
//     };
   // precoTotal(itens, quantidades);
  //  console.log(precoTotal(itens, quantidades));
       

//  Att04

 let Objetos = [
    { nome: 'Camiseta', preco: 20 },
    { nome: 'Celular', preco: 500 },
    { nome: 'Caneca', preco: 10 }
  ];

 const ProdutosPrecoMinimo =  (ArrayObjetos, ProdutosPrecoMinimo) => {

    return ArrayObjetos.filter((Objeto) => Objeto.preco > ProdutosPrecoMinimo);

 };

 console.log(ProdutosPrecoMinimo(Objetos, 40))
  