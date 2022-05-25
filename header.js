window.addEventListener(
  "load",
  function (event) {
    var cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];

    var output = "";

    if (cartProducts.length > 0) {
      output += `
                ${cartProducts.length}
                `;

      document.getElementById("shoppingCartQuantity").innerHTML = output;
    } else {
      document
        .getElementById("shoppingCartQuantity")
        .classList.add("displaynone");
    }
  },
  false
);
