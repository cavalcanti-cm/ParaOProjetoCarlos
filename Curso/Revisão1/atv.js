const numeros = [32, 6, 5, 4, 1, 8, 9]
//Todos as nativas para trabalhar com array eu preciso para como parametro um função anonima ou callback()
const maiorqueCinco = numeros.find((numero)) => {
    return numero > 5;
}
console.log(maiorqueCinco);

const maioresQueCinco = numeros.filter((numeros)) => {
    return numero > 5;
};
console.log(maioresQueCinco);