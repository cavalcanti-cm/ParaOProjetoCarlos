//const array = [6, 2 , 5, 3, 9, 7, ];
//console.log(array)
//array.push(10) //Adiciona elemento no final
//console.log(array)
//array.unshift(10) //Adiciona elemento no inicio
//console.log(array)
//array.pop() //Remove elemnto no final
//console.log(array)
//array.shift() //Remone elemento no inicio
//console.log(array)

//Metodo FOREACH
const numeros = [3,6,5,7,9,2];
//1º - elemento / 2º? - indice/index
numeros.forEach((elemento, index) => {
    console.log(`${index} - ${elemento} - ${array}`)
})
 
//MAP
numeros.map(() => {
    console.log(numero * 2);

})


const array = [21, 6, 84, 24, 86, 11, 39, 59, 96, 53];
array.map (() => {
    console.log(array * 2);
})