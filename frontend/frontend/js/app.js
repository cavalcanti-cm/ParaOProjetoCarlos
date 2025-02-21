const BASE_URL = "http://localhost:3333/api";

const formCad = document.getElementById("item-form");
const message = document.getElementById("message");

//Funções utilitárias
const showMessage = (text, cor) => {
  message.textContent = text;
  message.style.color = cor;
};

//Iniciar o cadastro de items
const handleFormSubmit = async (event) => {
  event.preventDefault();

  const campoName = document.getElementById("name").value;
  const campoDescription = document.getElementById("description").value;

  const item = {
    name: campoName,
    description: campoDescription,
  };

  await sendItem(item);
  // console.log(JSON.stringify(item))
};
const sendItem = async (objItem) => {
  // console.log(objItem)
  try {
    const res = await fetch(`${BASE_URL}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Connection: "close", //Obrigatório no POST
      },
      body: JSON.stringify(objItem),
    });

    if (!res.ok) {
      console.log("Erro: ", res);
      return;
    }
    console.log("Item cadastrado");
  } catch (error) {
    console.log(error);
  }

  showMessage("Atividade cadastrada", "green");
};
//Fim do cadastro de itens

//Inicar a buscar/mostrar os items
const listItems = async () => {
  try {
    const res = await fetch(`${BASE_URL}/items`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      console.log("Erro ao listar itens");
      return;
    }
    const items = await res.json();
    console.log(items);
    await showItems(items);
  } catch (error) {
    console.log("Erro:", error);
  }
};
const showItems = async (items) => {
  const itemList = document.getElementById("item-list");
  itemList.innerHTML = "";
  //map(()=>``)
  const cards = items
    .map(
      (item) => `
        <article class="item-card">
            <header class="item-card__header">
            <h2 class="item-card__title">${item.name}</h2>
            </header>

            <section class="item-card__body">
            <p class="item-card__description">
                ${item.description}
            </p>
            </section>

            <footer class="item-card__footer">
            <button onclick="editItem(${item.id})" class="item-card__button item-card__button--edit">
                Editar
            </button>
            <button onclick="deleteItem(${item.id})" class="item-card__button item-card__button--delete">
                Excluir
            </button>
            </footer>
        </article>
    `
    )
    .join("");
  itemList.innerHTML = cards;
};
//fim da buscar/mostrar os items

//inicio excluir item
const deleteItem = async (id) => {
  // console.log(id)
  try {
    const res = await fetch(`${BASE_URL}/items/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      showMessage("Item excluído com sucesso", "green");
      return;
    } else {
      showMessage("Item não excluído", "red");
      return;
    }
  } catch (error) {
    console.log(error);
  }
};
//fim excluir item

//inicio Editar
const editItem = async (id) => {
  const url = `pages/item.html?id=${id}`;
  window.location = url
};
//fim Editar

//Eventos
formCad.addEventListener("submit", handleFormSubmit);
document.addEventListener("DOMContentLoaded", listItems);
