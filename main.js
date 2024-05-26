async function getResponse(){
  let response = await fetch('https://faktura.by/api/v1/posts')
  let content = await response.json();
  let cards = content.data;

  let list = document.querySelector("#cardsContainer"); 

  for(let card of cards) {
    console.log(card);
    list.innerHTML += `
      <div class="col">
        <div class="card" style="width: 18rem;">
            <img src="https://faktura.by/${card.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${card.title}</h5>
              <p class="card-text">${card.little_description}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>
    `;
  }
}

getResponse()