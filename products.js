const fetchProducts = async () => {
    try {
        const res = await fetch('../products.json');
        const products = await res.json()
        loadProducts(products)
        
    } catch (error) {
        console.log(error)
    }
}

function loadProducts(products) {

    var output = '';

    for (let i = 0; i < products.length; i++) {
        output += `
            <div class="product">
                <img src="${products[i].imgUrl}">
                <div class="productInfo">
                    <div class="productTitle">
                        <span class="productModel">${products[i].Model}</span>
                        <span class="productBrand">${products[i].Brand}</span>
                    </div>
                    <span class="productSex">${products[i].Sex}</span>
                    <div class="productColors">
                        <span class="productColorTitle">Colores:</span>
                        <span class="productThing productColor"></span>
                    </div>
                    <div class="productSizes">
                        <span class="productThingTitle">Talles:</span>
                        <span class="productThing productSize"></span>
                    </div>
                    <span class="productPrice">$${products[i].price}</span>
                    <button><span><i class="fa-solid fa-cart-plus"></i> Agregar al carrito</span></button>
                </div>
            </div>
        `;
    }

    document.getElementById('productContainer').innerHTML = output;

}



window.onload = function () {
    fetchProducts();
}