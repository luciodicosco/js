const productContainer = document.getElementById('productContainer');
const product = document.getElementById('product').content;
const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('js/shoes.json')
        const data = await res.json()
        pintarProductos(data)
        
    } catch (error) {
        console.log(error)
    }
}

const pintarProductos = data => {
    data.forEach(products => {
       // product.querySelector('.productImage').src = products.image
        product.querySelector('.productModel').textContent = products.model
        product.querySelector('.productBrand').textContent = products.brand
        product.querySelector('.productSex').textContent = products.sex
        product.querySelector('.productColor').textContent = products.color
        product.querySelector('.productSize').textContent = products.size
        product.querySelector('.productPrice').textContent = products.price
        
        const clone = product.cloneNode(true)
        fragment.appendChild(clone)
    });
    product.appendChild(fragment)
}