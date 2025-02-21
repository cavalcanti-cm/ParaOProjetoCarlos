document.addEventListener('DOMContentLoaded', ()=>{
    const url = `https://api.thecatapi.com/v1/images/search?limit=10`

    fetch(url)
    .then((response)=>{
        if(!response.ok){
            throw new Error('Erro ao buscar dados')
        }
        return response.json()

    })
    .then((data)=>{
        gerarimages(data)
})
.catch((err) => {
    console.log(err);
})
})

const gerarimages = (images) => {
 //   console.log('Lista de images => ', images)
 const select = document.getElementById('select')
 images.map(((images)=>{
    const option = document.createElement('option')
    option.innerHTML =  `${images}`
    option.value = categoria
    option.id = categoria
    select.appendChild(option)
 }));
};

const btnEnviar = document.getElementById("btnEnviar");
btnEnviar.addEventListener("click", () => {
    const select = document.getElementById('select').value
   // console.log(select)
   const url = `https://api.thecatapi.com/v1/images/search?limit=10${select}`;

   fetch()
   .then((response)=>{
    if(!response.ok){
        throw new Error("Erro ao gerar imagens")
    }
    return response.json()
   })
   .then((data)=>{
   gerarimages(data)
   })
   .catch((err)=>console.log(err))
});

const gerarPiada = (piada) => {
    const joke = document.getElementById('joke')
    joke.textContent = images.value
}