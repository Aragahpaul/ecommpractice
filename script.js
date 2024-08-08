const card1 = document.querySelector(".product-card");
let newArray = [];

function getProduct() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      newArray = data;
      // console.log(newArray);

      addProduct();
    });
}
getProduct();
// console.log(getPost());

// addProduct();
function addProduct() {
  let card1 = document.querySelector(".product-card");
  let displayProduct = "";

  // console.log("After", newArray);

  newArray.forEach((eachProduct, index) => {
    displayProduct += `
       <img class="hero-img" src=${eachProduct.image} alt="" />
        <h3>${eachProduct.title}</h3>
        <p class="description " >
        ${eachProduct.description}
        </p>
        <strong class="price">N${eachProduct.price}</strong>

        <button>Add to Card</button>
         `;
  });
  card1.innerHTML = displayProduct;
  // viewPost();
}
