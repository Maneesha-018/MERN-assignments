
const product = {
    id: 101,
    name: "Laptop",
    brand: "HP",
    price: 55000,
    category: "Electronics",

    specifications: {
        processor: "Intel Core i5",
        ram: "8GB",
        storage: "512GB SSD",
        display: "15.6 inch",
        color: "Silver"
    }
};

function displayProduct() {
    const details = document.getElementById("productDetails");

    details.innerHTML = `
        <div class="product">
            <h2>${product.name}</h2>

            <p><b>Product ID:</b> ${product.id}</p>
            <p><b>Brand:</b> ${product.brand}</p>
            <p><b>Price:</b> ₹${product.price}</p>
            <p><b>Category:</b> ${product.category}</p>

            <div class="specifications">
                <h3>Specifications</h3>
                <p>Processor: ${product.specifications.processor}</p>
                <p>RAM: ${product.specifications.ram}</p>
                <p>Storage: ${product.specifications.storage}</p>
                <p>Display: ${product.specifications.display}</p>
                <p>Color: ${product.specifications.color}</p>
            </div>
        </div>
    `;
}

displayProduct();
