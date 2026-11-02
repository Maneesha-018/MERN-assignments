let shoppingList = [];

function addItem() {
    let item = document.getElementById("item").value.trim();

    if (item === "") {
        alert("Please enter an item");
        return;
    }

    shoppingList.push(item);

    document.getElementById("item").value = "";

    showList();
}

function removeItem() {
    if (shoppingList.length === 0) {
        alert("Shopping list is empty");
        return;
    }

    shoppingList.pop();
    showList();
}

function showList() {
    let result = document.getElementById("result");

    if (shoppingList.length === 0) {
        result.innerHTML = "No items in shopping list";
        return;
    }

    let output = "<h3>Your Shopping Items:</h3>";

    for (let i = 0; i < shoppingList.length; i++) {
        output += (i + 1) + ". " + shoppingList[i] + "<br>";
    }

    output += "<br>Total Items: " + shoppingList.length;

    result.innerHTML = output;
}