//"characters": "https://rickandmortyapi.com/api/character",
//  "locations": "https://rickandmortyapi.com/api/location",
 // "episodes": "https://rickandmortyapi.com/api/episode",






const page = 4
const baseUrl = "https://rickandmortyapi.com/api";

const loadCharacter = async () => {
    try {
        const res = await fetch(`${baseUrl}/character?page=${page}`);
        if(!res.ok){
            throw new Error('Erro ao buscar characteres')
        }
        const data = await res.json()
       const limitData = data.results.slice(3,9)
        console.log('personagens => ', limitData)
        return { results: limitData}
    }  catch (error) {
        console.log("Erro: ", error);
    }
};

loadCharacter();

const loadLocation = async() =>{
    try {
        const res = await fetch(`${baseUrl}/location`)
        if(!res.ok){
            throw new Error('Erro ao buscar localizações')
        }
        const data = await res.json()
        const limitData = data.results.slice(0,10)
        console.log('localizações => ', limitData)
        return { results: limitData}
    }  catch (error) {
        console.log("Erro: ", error);
    }

}
loadLocation()
const loadEpisode = async() =>{
    const res = await fetch(`${baseUrl}/Episode`)
    const data = await res.json()
    return { results: data}
}


const loadAllWithPromise = async () => {
    const [character, location, episode] = await Promise.all([
        loadCharacter()
        loadLocation()
        loadEpisode()
    ])
}

showCharacter(character.results);
// console.log(location)
//console.log(episode)
;
loadAllWithPromise();

const showCharacter = (characteres) => {
    console.log(characteres);
    const characterContainer = document.getElementById('character-container')
    characteres.map((charactere)=>{
        const divCharacter = document.createElement('div')
        divCharacter.id = `character-${charactere.id}`
        divCharacter.innerHTML = `
        <img id="img-character" src="${charactere.image}"/>
        <artcle class="character-info">
        <h3>${charactere.name}</h3>
        <span class="location" >Location:</span>
        <a class="character-link" href+"${charactere.location.url}">${character.location.name}</a>

        <span class="location" >Origin:</span>
        <a class="character-link" href+"${charactere.origin.url}">${character.origin.name}</a>
        </article>

        `
        divCharacter.classList.add('character-box')
        characterContainer.appendChild(divCharacter)
        divCharacter.addEventListener('click', ()=>{
            alert(charactere.id)
        })



    })
}

const characterDetails = (id) => {
    console.log(id)
    window.location.href =  `./pages/chatracter.html?id=${id}`
    
}

