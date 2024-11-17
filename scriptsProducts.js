const grid = document.querySelector("#productGrid");

function bob() {
  fetch("/data.json")
    .then((response) => response.json())
    .then((data) => {
      var i = 0,
        len = data.products.length;
      while (i < len) {
        const product = data.products[i];
        const productIndividual = document.createElement("div");
        const productName = document.createElement("h2");
        const productImage = document.createElement("img");
        const productPrice = document.createElement("p");
        const productDescription = document.createElement("p");
        productIndividual.appendChild(productName);
        productIndividual.appendChild(productImage);
        productIndividual.appendChild(productPrice);
        productIndividual.appendChild(productDescription);
        productName.textContent = `${data.products[i].name}`;
        productImage.src = `${data.products[i].image}`;
        productPrice.textContent = `${data.products[i].price}`;
        productDescription.textContent = `${data.products[i].description}`;
        grid.append(productIndividual);
        i++;
        console.log("hi");
      }
    });
}
bob();

// sorting portions// function sortAlphabetical() {
//   console.log("clicked");
//   console.log(json.products);
//   json.products.sort((a, b) => a.name - b.name);
//   console.log(json.products);
// }
