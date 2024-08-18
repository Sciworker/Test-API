async function getProductDetails(url) {
  let response = await fetch(`https://faktura.by/api/v1/posts/url/${url}`);
  let product = await response.json();
  console.log(product)


  let container = document.querySelector("#productContainer");
  container.innerHTML = `
      <div class="card mx-auto w-100" style="max-width: 100%;">
      <img src="https://faktura.by/${product.data.img}" class="card-img-top" alt="${product.data.title}">
      <div class="card-body">
        <h5 class="card-title">${product.data.title}</h5>
        <p class="card-text">${product.data.description}</p>
        <a href="${product.data.url}" class="btn btn-primary">Перейти на сайт</a>
      </div>
    </div>
    `;
}

let params = new URLSearchParams(window.location.search);
let productUrl = params.get('url');
getProductDetails(productUrl);
