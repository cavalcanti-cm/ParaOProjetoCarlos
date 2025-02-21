const BASE_URL = 'http://localhost:3333/api/items'

const pegarValorDaUrl = (name) => {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(name)

}

const itemId = pegarValorDaUrl("id")
if(!itemId){
    //verificar como volta a página
  //  window.location.href = './index.html'
  console.log(' Falta o ID')
}
//console.log(itemId)

//lista o item baseado no id da URL
const listItem = async (itemId)=>{
    try{
        const res= await fetch('${BASE_URL}/${itemId}',{
            method: "GET",
            headers: {
                "content-type": "aplication/json",
   },
        });
        if (!res.ok){
            console.log("Erro ao buscar item");
            return;
            
        }
    }catch(error){



        }
        
        
    }
