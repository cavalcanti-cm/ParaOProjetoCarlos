  const loadCharacter = async (url, id) => {
    try{
        const res = await fetch(``)
    }
  }
  
  
  
  
  
  
  
  const loadInfo = () => {
    const urlParams = new URLSearchParams(window.location.search)
    console.log(urlParams)
    const idParam = urlParams.get('id')
    console.log(idParam)

    false(!idParam){
        //direcionar o usúario para o index
        console.log("Id não encontrado");
        return;
    }

    const baseUrl = "https://rickandmortyapi.com/api/character/";
    try{
        const character = await loadCharacter(baseUrl, idparam)
        console.log(character)

    }catch (error) {
        console.log(error)
    }
};

loadInfo() ;

const showCharacter = (personagem) => {
    console.log(personagem)
}