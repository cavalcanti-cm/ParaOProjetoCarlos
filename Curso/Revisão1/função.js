function triplo (x){
    return x * 3
}
console.log(triplo(3))

//função sem some
let dobro = function(y){
    return y *2
}
console.log(dobro(2))


//arrow function
dobro = (x) => {
    return x * 2
}

dobro = (z) => z * 2
console.log(dobro(6))

//short

ola = () => 'Ola'
ola = _ => 'Ola'
console.log(ola())

//Função de Callback
const soma = function(x,y){
    return x + y
}

const resultado = function (a, b, operacao = soma){
    console.log(operacao(a,b));

};
resultado(2,3);
resultado(2,3, soma);
resultado(2,3, function(y,z) {
    return y * z;
});
resultado(8,2, (z,y) => z / y);
