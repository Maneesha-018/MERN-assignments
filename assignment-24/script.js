
function mergeSettings(defaultSettings, userSettings) {
    return { ...defaultSettings, ...userSettings };
}

function calculateTotal(price, quantity) {
    return price * quantity;
}

function calculateDiscount(total, discount) {
    return total - (total * discount / 100);
}

function calculateTax(total, tax) {
    return total + (total * tax / 100);
}

function calculateAverage(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum / numbers.length;
}

function showSettings() {

    let defaultSettings = {
        theme: "Light",
        language: "English",
        notifications: true
    };

    let userSettings = {
        theme: "Dark",
        language: "Hindi"
    };

    let finalSettings = mergeSettings(
        defaultSettings,
        userSettings
    );

    document.getElementById("settings").innerHTML =
        "Theme: " + finalSettings.theme + "<br>" +
        "Language: " + finalSettings.language + "<br>" +
        "Notifications: " + finalSettings.notifications;
}

function showTotal() {

    let price = Number(document.getElementById("price").value);
    let quantity = Number(document.getElementById("quantity").value);

    if (document.getElementById("price").value === "" ||
        document.getElementById("quantity").value === "" ||
        price < 0 || quantity <= 0) {

        document.getElementById("total").innerText =
            "Please enter valid values";
        return;
    }

    let total = calculateTotal(price, quantity);
    let discount = calculateDiscount(total, 10);
    let finalAmount = calculateTax(discount, 5);

    document.getElementById("total").innerHTML =
        "Total: ₹" + total + "<br>" +
        "After 10% Discount: ₹" + discount + "<br>" +
        "Final Amount with 5% Tax: ₹" + finalAmount;
}
