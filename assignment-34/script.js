
async function loadCatalogue() {
    try {
        const response = await fetch("catalogue.json");

        if (!response.ok) {
            throw new Error("Unable to load catalogue");
        }

        const data = await response.json();

        const products = data.catalogue.products;

        let output = "";

        products.forEach(function(product) {
            output += `
                <div>
                    <h3>${product.name}</h3>
                    <p>Brand: ${product.brand}</p>
                    <p>Price: ₹${product.price}</p>
                    <p>Category: ${product.category}</p>
                    <p>Available: ${product.inStock ? "Yes" : "No"}</p>
                </div>
                <hr>
            `;
        });

        document.getElementById("result").innerHTML = output;

    } catch (error) {
        document.getElementById("result").textContent = error.message;
    }
}
