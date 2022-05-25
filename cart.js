const fetchProducts = async () => {
  try {
    const res = await fetch("../products.json");
    const products = await res.json();
    loadProducts(products);
  } catch (error) {
    console.log(error);
  }
};

function loadProducts(products) {
  var cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];

  var output = "";

  if (cartProducts.length > 0) {
    var outputTotal = "";
    var totalCartPrice = 0;
    for (let index = 0; index < cartProducts.length; index++) {
      const element = cartProducts[index];
      const product = products.find(function (product) {
        return product.Id === element.Id;
      });
      product.Quantity = element.Quantity;

      var totalProductPrice = product.price * element.Quantity;
      totalCartPrice += totalProductPrice;

      output += `
            <div class="product">
                <div class="prductInfo">
                    <img src="${product.imgUrl}">
                    <span class="productModel">${product.Model}</span>
                    <span class="productBrand">${product.Brand}</span>
                </div>
                <div class="productResume">
                    <span class="productQuantity">cantidad: ${product.Quantity}</span>
                    <span class="productPrice">$${totalProductPrice}</span>
                </div>
                <button onclick="removeCart(${product.Id})"><span><i class="fa-solid fa-trash-alt"></i></span></button>
            </div>
            `;
    }

    outputTotal += `<span>Total: $${totalCartPrice}</span>
        <button><span>Comprar</span></button>`;

    document.getElementById("resume").innerHTML = outputTotal;
  } else {
    document.getElementById("resume").classList.add("displaynone");
    output += `
            <div class="cartEmpty">
                <h2>Carrito vacío</h2>
                <p>Agrega productos al carrito para poder comprarlos</p>
            </div>
        `;
  }

  document.getElementById("productList").innerHTML = output;
}

function removeCart(id) {
  var cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
  var product = cartProducts.find(function (product) {
    return product.Id === id;
  });

  if (product.Quantity > 1) {
    product.Quantity--;
  } else {
    cartProducts.splice(cartProducts.indexOf(product), 1);
  }

  localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  loadProducts(cartProducts);

  location.reload();
}

window.onload = function () {
  fetchProducts();
};
