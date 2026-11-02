const products = [
    { name: "Laptop", price: 50000, category: "Electronics" },
    { name: "Mobile", price: 20000, category: "Electronics" },
    { name: "Shoes", price: 1500, category: "Fashion" },
    { name: "Watch", price: 3000, category: "Fashion" },
    { name: "Keyboard", price: 800, category: "Electronics" }
];

function displayProducts(data) {
    const productList = document.getElementById("productList");

    productList.innerHTML = "";

    data.forEach(function(product) {
        productList.innerHTML += `
            <div class="product">
                <h3>${product.name}</h3>
                <p>Price: ₹${product.price}</p>
                <p>Category: ${product.category}</p>
            </div>
        `;
    });

    const total = data.reduce(function(sum, product) {
        return sum + product.price;
    }, 0);

    const average = data.length > 0 ? total / data.length : 0;

    document.getElementById("summary").innerHTML = `
        Total Products: ${data.length}<br>
        Total Price: ₹${total}<br>
        Average Price: ₹${average.toFixed(2)}
    `;
}

function filterProducts() {
    const maxPrice = Number(document.getElementById("maxPrice").value);

    const filteredProducts = products.filter(function(product) {
        return product.price <= maxPrice;
    });

    displayProducts(filteredProducts);
}

function showAllProducts() {
    displayProducts(products);
}

displayProducts(products);