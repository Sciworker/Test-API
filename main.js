async function getResponse() {
  let response = await fetch('https://faktura.by/api/v1/posts');
  let content = await response.json();
  let cards = content.data;

  let list = document.querySelector("#cardsContainer");

  for (let card of cards) {
    console.log(card);
    list.innerHTML += `
       <div class="col">
        <div class="card h-100">
          <img src="https://faktura.by/${card.img}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${card.title}</h5>
            <p class="card-text">${card.little_description}</p>
            <a href="product.html?url=${card.url}" class="btn btn-primary">Перейти</a>
          </div>
        </div>
      </div>
    `;
  }
}

getResponse();

const slides = document.getElementById('slides');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function showSlide(index) {
  const totalSlides = slides.children.length;
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});
