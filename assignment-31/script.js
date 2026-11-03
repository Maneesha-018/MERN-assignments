
const cart = {
    items: [],

    addItem: function(name, price, quantity) {
        this.items.push({
            name: name,
            price: price,
            quantity: quantity
        });
    },

    calculateTotal: function() {
        let total = 0;

        this.items.forEach(function(item) {
            total += item.price * item.quantity;
        });

        return total;
    }
};

function addToCart() {
    let name = document.getElementById("productName").value.trim();
    let price = Number(document.getElementById("price").value);
    let quantity = Number(document.getElementById("quantity").value);

    let message = document.getElementById("message");

    if (name === "" || price <= 0 || quantity <= 0 ||
        !Number.isInteger(quantity)) {
        message.textContent = "Please enter valid product details and quantity.";
        return;
    }

    cart.addItem(name, price, quantity);

    message.textContent = "Product added successfully!";

    displayCart();

    document.getElementById("productName").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";
}

function displayCart() {
    let cartItems = document.getElementById("cartItems");

    cartItems.innerHTML = "";

    cart.items.forEach(function(item) {
        cartItems.innerHTML += `
            <div class="cart-item">
                <h3>${item.name}</h3>
                <p>Price: ₹${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Subtotal: ₹${item.price * item.quantity}</p>
            </div>
        `;
    });

    document.getElementById("total").textContent =
        "Total: ₹" + cart.calculateTotal();
}
