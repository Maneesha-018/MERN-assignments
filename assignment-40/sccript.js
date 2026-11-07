let products = [
    {
        name: "Laptop",
        price: 45000,
        image: "https://placehold.co/200x140?text=Laptop"
    },
    {
        name: "Mobile",
        price: 20000,
        image: "https://placehold.co/200x140?text=Mobile"
    },
    {
        name: "Headphones",
        price: 1500,
        image: "https://placehold.co/200x140?text=Headphones"
    }
];

let container = document.getElementById("productContainer");

function renderCard(product) {
    let card = document.createElement("div");
    card.className = "card";

    let image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;

    let name = document.createElement("h3");
    name.textContent = product.name;

    let price = document.createElement("p");
    price.textContent = "Price: ₹" + product.price;

    let button = document.createElement("button");
    button.textContent = "Buy Now";

    card.append(image, name, price, button);

    return card;
}

products.forEach(function(product) {
    container.appendChild(renderCard(product));
});