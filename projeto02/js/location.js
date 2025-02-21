const loadLocation = async (url,id) => {
    try {
      const res = await fetch(`${baseUrl}/location`);
      if (!res.ok) {
        throw new Error("Erro ao buscar localizações");
      }
      const data = await res.json();
      const limitData = data.results.slice(0, 10);
      return { results: limitData };
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const loadInfo = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams);
    const idParam = urlParams.get("id");
    console.log(idParam);
  
    if (!idParam) {
      //direcionar o usuário para o index
      console.log("ID não encontrado");
      return;
    }

    const baseUrl =  "https://rickandmortyapi.com/api/location";
  try {
    const location = await loadlocation(baseUrl, idParam)
    showCharacter(location)
  } catch (error) {
    console.log(error)
  }
};
